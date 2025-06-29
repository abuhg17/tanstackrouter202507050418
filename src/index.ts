export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)

    const isStatic = url.pathname.startsWith('/assets') || url.pathname.match(/\.(js|css|svg|png|ico|json|txt)$/)
    if (isStatic) {
      return fetch(request)
    }

    return fetch(`${url.origin}/index.html`)
  },
}