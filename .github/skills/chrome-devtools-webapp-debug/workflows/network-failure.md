# Workflow: Network failure (4xx, 5xx, CORS, timeout)

## Goal

Determine whether the problem is client, server, environment, or configuration, using network evidence.

## Steps

1. Reproduce and open the failing request(s).
2. For each failing request, capture:
   - URL and method
   - status code
   - timing breakdown
   - request headers
   - response headers
   - response body (if safe)
3. Classify the failure:
   - 401 or 403: auth or permissions
   - 404: route mismatch or wrong base URL
   - 429: rate limiting
   - 5xx: backend failure or dependency failure
   - CORS: missing allow headers, preflight failure
   - timeout: server slowness, client abort, network issues
4. Check whether the app is calling the correct environment endpoints.
5. Propose a minimal fix:
   - client config change (base URL, headers, auth refresh)
   - backend change (route, CORS headers, error handling)
   - retry or backoff strategy
6. Verification plan:
   - repeat the same action
   - confirm request succeeds and UI updates correctly
   - confirm no additional failed requests appear
