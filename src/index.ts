export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)

    // 靜態資源路由判斷（通常打到 /assets 或 .js/.css/.png/...）
    const isStaticAsset = url.pathname.startsWith("/assets") ||
      url.pathname.match(/\.(js|css|svg|png|ico|json|txt|woff2?)$/)

    if (isStaticAsset) {
      return fetch(request)
    }

    // Fallback to index.html for SPA-style routing
    const indexUrl = new URL("/index.html", url.origin)
    return fetch(indexUrl)
  },
}
