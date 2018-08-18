var isArray = Array.isArray

export default function cc(names) {
  var i,
    len,
    out = "",
    type = typeof names,
    next

  if (type === "string" || type === "number") return names || ""

  if (isArray(names) && names.length > 0) {
    for (i = 0, len = names.length; i < len; i++) {
      if ((next = cc(names[i])) !== "") out += (out && " ") + next
    }
  } else {
    for (i in names) {
      if (names.hasOwnProperty(i) && names[i]) out += (out && " ") + i
    }
  }

  return out
}
