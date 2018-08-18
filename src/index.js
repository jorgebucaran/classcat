var isArray = Array.isArray

export default function cc(cls) {
  var i,
    len,
    key,
    out = "",
    type = typeof cls,
    next

  if (type === "string" || type === "number") return cls || ""

  if (isArray(cls) && cls.length > 0) {
    for (i = 0, len = cls.length; i < len; i++) {
      if ((next = cc(cls[i]))) {
        out += (out && " ") + next
      }
    }
  } else {
    for (key in cls) {
      if (cls.hasOwnProperty(key) && cls[key]) {
        out += (out && " ") + key
      }
    }
  }

  return out
}
