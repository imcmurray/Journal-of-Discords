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
| `/assets/js/*.js` | Compiled JavaScript |
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
