export default function cc(classes) {
  var out = ""
  var type = typeof classes

  if (type === "string" || type === "number") {
    return classes || ""
  }

  if (Array.isArray(classes) && classes.length > 0) {
    for (var i = 0, len = classes.length; i < len; i++) {
      var next = cc(classes[i])
      if (next) {
        out += (out && " ") + next
      }
    }
  } else {
    for (var key in classes) {
      if (classes.hasOwnProperty(key) && classes[key]) {
        out += (out && " ") + key
      }
    }
  }

  return out
}
