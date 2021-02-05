const isArray = Array.isArray

export default function cc(obj) {
  if (typeof obj === "string" || typeof obj === "number") return "" + obj

  let out = ""
  if (isArray(obj))
    for (let i = 0, tmp; i < obj.length; i++) {
      if ((tmp = cc(obj[i])) !== "") {
        out += (out && " ") + tmp
      }
    }
  else
    for (let k in obj) {
      if (obj.hasOwnProperty(k) && obj[k]) out += (out && " ") + k
    }

  return out
}
