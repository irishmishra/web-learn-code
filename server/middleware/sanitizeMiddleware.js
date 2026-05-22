const dangerousPattern = /<script[\s\S]*?>[\s\S]*?<\/script>|javascript:|on\w+=/gi;

function clean(value) {
  if (typeof value === "string") return value.replace(dangerousPattern, "");
  if (Array.isArray(value)) return value.map(clean);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, clean(item)]));
  }
  return value;
}

export function sanitizeInput(req, _res, next) {
  if (req.body && typeof req.body === "object") {
    req.body = clean(req.body);
  }
  for (const container of [req.query, req.params]) {
    if (!container || typeof container !== "object") continue;
    for (const [key, value] of Object.entries(container)) {
      container[key] = clean(value);
    }
  }
  next();
}
