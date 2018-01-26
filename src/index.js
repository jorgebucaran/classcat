export default function cc(classes, prefix) {
  var next
  var type = typeof classes
  var result = ""

  prefix = prefix || ""

  if (type === "boolean") {
    return classes ? prefix : ""
  }

  if (type === "string" || type === "number") {
    return prefix + (classes || "")
  }

  if (Array.isArray(classes) && classes.length > 0) {
    for (var i = 0, len = classes.length; i < len; i++) {
      if ((next = cc(classes[i], prefix))) {
        result += (result && " ") + next
      }
    }
  } else if (type === "object") {
    for (var key in classes) {
      if ((next = cc(classes[key], prefix + key))) {
        result += (result && " ") + next
      }
    }
  }

  return result
}
