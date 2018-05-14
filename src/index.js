export default function cc(classes) {
  let out = ""
  const type = typeof classes

  if (type === "string" || type === "number") {
    return classes || ""
  }

  if (Array.isArray(classes) && classes.length > 0) {
    for (let i = 0, len = classes.length; i < len; i++) {
      const next = cc(classes[i])
      if (next) {
        out += (out && " ") + next
      }
    }
    return out
  }
  
  const keys = Object.keys(classes)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (classes[key]) {
      out += (out && " ") + key
    }
  }

  return out
}
