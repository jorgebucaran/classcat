var isArray = Array.isArray

export default function cc(str) {
  var out = ""

  if (typeof str === "string" || typeof str === "number") return str 

  if (isArray(str))
    for (var k = 0, tmp; k < str.length; k++) {
      if ((tmp = cc(str[k])) !== "") {
        out += (out && " ") + tmp
      }
    }
  else
    for (var k in str) {
      if (str[k]) out += (out && " ") + k
    }

  return out
}
