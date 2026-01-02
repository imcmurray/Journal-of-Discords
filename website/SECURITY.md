# Website Security Configuration

This document tracks security configurations for journalofdiscords.com hosted on Cloudflare.

---

## Cloudflare WAF Rules

### Purpose

Block malicious traffic and scanners probing for invalid endpoints (e.g., `/wp-admin/`, `/.env`, `/phpMyAdmin/`). Only allow requests to valid Hugo-generated paths.

---

## Free Tier Rule (Current)

Cloudflare free tier limits: **5 custom rules**, no `matches` (regex) operator.

**Rule Name:** `Block invalid endpoints`

**Action:** `Block`

**Expression:**

```
not (
  http.request.uri.path eq "/" or
  http.request.uri.path in {"/about/" "/faq/" "/methodology/" "/mission/" "/search/" "/sources/" "/terms/" "/songs/" "/speakers/" "/topics/"} or
  http.request.uri.path in {"/robots.txt" "/sitemap.xml" "/index.xml" "/index.json" "/404.html" "/songs/index.xml" "/speakers/index.xml"} or
  http.request.uri.path in {"/apple-touch-icon.png" "/favicon-16x16.png" "/favicon-32x32.png" "/favicon.svg"} or
  starts_with(http.request.uri.path, "/songs/") or
  starts_with(http.request.uri.path, "/speakers/") or
  starts_with(http.request.uri.path, "/topics/") or
  starts_with(http.request.uri.path, "/page/") or
  starts_with(http.request.uri.path, "/assets/") or
  starts_with(http.request.uri.path, "/css/")
)
```

**Operators used:** `eq`, `in {}`, `starts_with()`

**Tradeoff:** `starts_with()` is slightly more permissive than regex (allows any path under `/songs/`), but non-existent files just return 404. Still blocks common attack vectors.

---

## Paid Tier Rule (Pro+)

If upgraded to Cloudflare Pro or higher, you gain access to the `matches` operator (regex) for more precise path matching.

**Rule Name:** `Block invalid endpoints`

**Action:** `Block`

**Expression:**

```
not (
  http.request.uri.path eq "/" or
  http.request.uri.path matches "^/(about|faq|methodology|mission|search|sources|terms|songs|speakers|topics)/$" or
  http.request.uri.path matches "^/(songs|speakers|topics)/[a-z0-9.-]+/$" or
  http.request.uri.path matches "^/(speakers|topics)/[a-z0-9.-]+/page/[0-9]+/$" or
  http.request.uri.path matches "^/page/[0-9]+/$" or
  http.request.uri.path matches "^/(robots\\.txt|sitemap\\.xml|index\\.xml|index\\.json|404\\.html)$" or
  http.request.uri.path matches "^/(songs|speakers)/index\\.xml$" or
  http.request.uri.path matches "^/(apple-touch-icon|favicon-16x16|favicon-32x32)\\.png$" or
  http.request.uri.path eq "/favicon.svg" or
  http.request.uri.path matches "^/(assets/css|assets/js|css)/.*\\.(css|js)$"
)
```

**Benefits of regex version:**
- Validates slug format (`[a-z0-9.-]+`)
- Validates pagination numbers
- Restricts file extensions on assets

---

## Valid Endpoints Reference

Generated from `hugo list all` on 2024-12-29.

### Static Pages
| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/about/` | About the project |
| `/faq/` | Frequently asked questions |
| `/methodology/` | Research methodology |
| `/mission/` | Project mission |
| `/search/` | Search page |
| `/sources/` | Source documentation |
| `/terms/` | Terms of use |

### Dynamic Sections
| Pattern | Example |
|---------|---------|
| `/songs/` | Song listing |
| `/songs/{slug}/` | `/songs/death-on-the-spot/` |
| `/speakers/` | Speaker taxonomy |
| `/speakers/{slug}/` | `/speakers/brigham-young/` |
| `/speakers/{slug}/page/{n}/` | Paginated speaker pages |
| `/topics/` | Topic taxonomy |
| `/topics/{slug}/` | `/topics/polygamy/` |
| `/topics/{slug}/page/{n}/` | Paginated topic pages |
| `/page/{n}/` | Homepage pagination |

### Static Files
| Path | Description |
|------|-------------|
| `/robots.txt` | Search engine directives |
| `/sitemap.xml` | XML sitemap |
| `/index.xml` | RSS feed (main) |
| `/index.json` | Search index |
| `/songs/index.xml` | RSS feed (songs) |
| `/speakers/index.xml` | RSS feed (speakers) |
| `/404.html` | Error page |

### Assets
| Pattern | Description |
|---------|-------------|
| `/assets/css/*.css` | Compiled stylesheets |
| `/assets/js/*.js` | Custom JavaScript (e.g., likes.js) |
| `/css/*.css` | Custom CSS |
| `/apple-touch-icon.png` | iOS icon |
| `/favicon-16x16.png` | Favicon 16px |
| `/favicon-32x32.png` | Favicon 32px |
| `/favicon.svg` | SVG favicon |

---

## Maintenance

When adding new pages or sections to the site:

1. Update this document with new paths
2. Update the Cloudflare WAF rule expression
3. Test that new pages are accessible
4. Verify scanner paths still blocked

### Testing Blocked Paths

After deploying the rule, verify these return Cloudflare block pages:
- `/.env`
- `/wp-admin/`
- `/phpMyAdmin/`
- `/.git/config`
- `/api/v1/users`

---

## Cloudflare Setup Location

1. Dashboard → Select domain
2. **Security** → **WAF** → **Custom rules**
3. Create/edit rule
4. Switch to **Edit expression** mode for raw syntax

---

## Security Headers (Transform Rules)

Security headers are added via Cloudflare Transform Rules since the site is hosted on Railway (not Cloudflare Pages).

### Setup Location

1. Dashboard → Select domain
2. **Rules** → **Transform Rules**
3. Click **Modify Response Header** tab
4. Click **+ Create rule**

### Current Configuration

**Rule Name:** `Security Headers`

**When incoming requests match:** All incoming requests (expression: `true`)

**Then... Modify response header:**

| Operation | Header Name | Value |
|-----------|-------------|-------|
| Set static | `X-Content-Type-Options` | `nosniff` |
| Set static | `X-Frame-Options` | `SAMEORIGIN` |
| Set static | `X-XSS-Protection` | `1; mode=block` |
| Set static | `Referrer-Policy` | `strict-origin-when-cross-origin` |

### What Each Header Does

| Header | Purpose |
|--------|---------|
| `X-Content-Type-Options: nosniff` | Prevents browsers from MIME-sniffing (guessing content type) |
| `X-Frame-Options: SAMEORIGIN` | Prevents clickjacking by blocking iframe embedding from other sites |
| `X-XSS-Protection: 1; mode=block` | Enables legacy XSS filter in older browsers |
| `Referrer-Policy: strict-origin-when-cross-origin` | Controls how much referrer info is sent to other sites |

### Verify Headers

Test that headers are being applied:

```bash
curl -I https://journalofdiscords.com
```

Look for these headers in the response:
```
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-xss-protection: 1; mode=block
referrer-policy: strict-origin-when-cross-origin
```

### Alternative: Cloudflare Pages

If migrating to Cloudflare Pages, headers can be set via a `_headers` file in the static folder (already created at `static/_headers`). Cloudflare Pages reads this file automatically.

---

## Likes API (Cloudflare Worker)

The site uses a Cloudflare Worker to handle song likes. This runs on a separate domain from the main site.

### Worker Details

| Setting | Value |
|---------|-------|
| Worker Name | `jod-likes-api` |
| Worker URL | `jod-likes-api.ianmc.workers.dev` |
| KV Namespace | `SONG_LIKES` |
| KV Binding | `LIKES` |

### API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/likes` | Get all song like counts |
| GET | `/api/likes/{songId}` | Get like count for a song |
| POST | `/api/likes/{songId}` | Like or unlike a song |

### Security Measures

**Built into Worker code (`workers/likes-api.js`):**
- ✅ CORS headers restrict browser requests to `journalofdiscords.com`
- ✅ Origin header **required** (blocks curl/scripts, only allows browser requests)
- ✅ Referer validation as fallback
- ✅ Returns 403 Forbidden for unauthorized requests
- ✅ Song ID regex validation (`[a-z0-9-]+`)

**Why Origin is required:**
Without requiring Origin, anyone could use curl or scripts to:
- Create arbitrary KV entries (fake song IDs)
- Hit write limits (1,000/day on free tier)
- Potentially trigger billing overages

Browsers always send the Origin header on cross-origin requests, so legitimate users are unaffected.

### Why Separate from Main WAF

The Likes API runs on `*.workers.dev` (or a subdomain), not on `journalofdiscords.com`. The main site's WAF rules don't apply to Workers. The Worker handles its own security through Origin validation in the code.

### Maintenance

When updating the Worker:
1. Edit code in Cloudflare Dashboard → Workers → `jod-likes-api` → Quick Edit
2. Or update `workers/likes-api.js` locally and paste into dashboard
3. Test with: `curl https://jod-likes-api.ianmc.workers.dev/api/likes`
