export default function cc(classes) {
  var out = ""

  if (Array.isArray(classes)) {
    if (classes.length > 1) {
      for (var i = 0, len = classes.length; i < len; i++) {
        var t = typeof classes[i];

        var next = t !== 'string' && t !== 'number' ? cc(classes[i]) : classes[i]
        if (next) {
          out += (out && " ") + next
        }
      }
    }

  } else {
    var type = typeof classes

    if (type === "string" || type === "number") {
      return classes || ""
    }

    for (var key in classes) {
      if (classes.hasOwnProperty(key) && classes[key]) {
        out += (out && " ") + key
      }
    }
  }

  return out
}
