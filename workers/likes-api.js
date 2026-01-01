// Cloudflare Worker for Song Likes API
// Deploy to Cloudflare Workers and bind KV namespace "LIKES"
//
// Setup:
// 1. Create KV namespace: SONG_LIKES
// 2. Create Worker: jod-likes-api
// 3. Bind KV: Variable name "LIKES" → Namespace "SONG_LIKES"
// 4. Optional: Add custom domain likes.journalofdiscords.com

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const ALLOWED_ORIGIN = 'https://journalofdiscords.com';

    const corsHeaders = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // SECURITY: Validate Origin header (blocks requests not from our site)
    const origin = request.headers.get('Origin');
    const referer = request.headers.get('Referer');

    // Allow requests from our domain or no origin (direct browser navigation)
    // Use exact match for origin, and path prefix for referer to prevent bypass
    // e.g., journalofdiscords.com.attacker.com would fail
    const isValidOrigin = !origin || origin === ALLOWED_ORIGIN;
    const isValidReferer = !referer || referer.startsWith(ALLOWED_ORIGIN + '/');

    if (!isValidOrigin && !isValidReferer) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403, headers: corsHeaders
      });
    }

    const path = url.pathname;

    try {
      // GET /api/likes - Get all like counts
      if (path === '/api/likes' && request.method === 'GET') {
        const list = await env.LIKES.list();
        const counts = {};
        for (const key of list.keys) {
          counts[key.name] = parseInt(await env.LIKES.get(key.name)) || 0;
        }
        return new Response(JSON.stringify(counts), { headers: corsHeaders });
      }

      // Match /api/likes/:songId
      const match = path.match(/^\/api\/likes\/([a-z0-9-]+)$/);
      if (!match) {
        return new Response(JSON.stringify({ error: 'Not found' }), {
          status: 404, headers: corsHeaders
        });
      }

      const songId = match[1];

      // GET /api/likes/:songId - Get like count for a song
      if (request.method === 'GET') {
        const count = parseInt(await env.LIKES.get(songId)) || 0;
        return new Response(JSON.stringify({ id: songId, count }), {
          headers: corsHeaders
        });
      }

      // POST /api/likes/:songId - Like or unlike a song
      if (request.method === 'POST') {
        const body = await request.json();
        const action = body.action; // 'like' or 'unlike'

        let count = parseInt(await env.LIKES.get(songId)) || 0;

        if (action === 'like') {
          count += 1;
        } else if (action === 'unlike') {
          count = Math.max(0, count - 1);
        }

        await env.LIKES.put(songId, count.toString());

        return new Response(JSON.stringify({ id: songId, count }), {
          headers: corsHeaders
        });
      }

      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405, headers: corsHeaders
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500, headers: corsHeaders
      });
    }
  }
};
