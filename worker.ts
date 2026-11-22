import { onRequestGet, onRequestOptions, onRequestPost } from './functions/api/chat'

export interface Env {
  AI: any
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>
  }
  CF_ACCOUNT_ID?: string
  CF_API_TOKEN?: string
  GEMINI_API_KEY?: string
  GROQ_API_KEY?: string
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)

    // Route /api/chat requests to the Digital Twin Edge AI handler
    if (url.pathname === '/api/chat' || url.pathname === '/api/chat/') {
      if (request.method === 'OPTIONS') {
        return onRequestOptions()
      }
      if (request.method === 'GET') {
        return onRequestGet()
      }
      if (request.method === 'POST') {
        const context = {
          request,
          functionPath: url.pathname,
          waitUntil: ctx.waitUntil.bind(ctx),
          passThroughOnException: () => {},
          next: () => Promise.resolve(new Response(null)),
          env,
          params: {},
          data: {},
        }
        return onRequestPost(context as any)
      }
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Pass all other traffic to static assets (with SPA fallback)
    return env.ASSETS.fetch(request)
  },
}
