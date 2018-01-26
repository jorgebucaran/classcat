export default function cc(classes) {
  var next
  var type = typeof classes
  var result = ""

  if (type === "string" || type === "number") {
    return classes || ""
  }

  if (Array.isArray(classes) && classes.length > 0) {
    for (var i = 0, len = classes.length; i < len; i++) {
      if ((next = cc(classes[i]))) {
        result += (result && " ") + next
      }
    }
  } else {
    for (var key in classes) {
      if (classes.hasOwnProperty(key) && classes[key]) {
        result += (result && " ") + key
      }
    }
  }

  return result
}
