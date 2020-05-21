var isArray = Array.isArray

export default function cc(obj) {
  var out = ""

  if (typeof obj === "string" || typeof obj === "number") return obj || ""

  if (isArray(obj))
    for (var k = 0, tmp; k < obj.length; k++) {
      if ((tmp = cc(obj[k])) !== "") {
        out += (out && " ") + tmp
      }
    }
  else
    for (var k in obj) {
      if (obj.hasOwnProperty(k) && obj[k]) out += (out && " ") + k
    }

  return out
}
