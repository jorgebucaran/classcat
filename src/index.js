var isArray = Array.isArray

export default function cc(obj) {
  if (typeof obj === "string") return obj;
  else if (typeof obj === "number") return obj.toString();

  var out = ""
  if (isArray(obj))
    for (var i = 0, tmp; i < obj.length; i++) {
      if ((tmp = cc(obj[i])) !== "") {
        out += (out && " ") + tmp
      }
    }
  else
    for (var k in obj) {
      if (obj.hasOwnProperty(k) && obj[k]) out += (out && " ") + k
    }

  return out
}
