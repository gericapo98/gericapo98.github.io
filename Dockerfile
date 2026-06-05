# Self-hosted CV/portfolio — static files served by nginx.
FROM nginx:1.27-alpine

# Site content
COPY docs/ /usr/share/nginx/html/

# Server config (gzip, caching, security headers, SPA-style fallback)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Container is healthy when nginx answers on :80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO /dev/null http://127.0.0.1/ || exit 1
