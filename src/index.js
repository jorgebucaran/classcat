export default function cc(classes, prefix) {
  var value
  var className = ""
  var type = typeof classes

  prefix = prefix || ""

  if (type === "boolean") {
    return classes ? prefix : ""
  }

  if ((classes && type === "string") || type === "number") {
    return classes
  }

  if (Array.isArray(classes) && classes.length) {
    for (var i = 0, len = classes.length; i < len; i++) {
      if ((value = cc(classes[i], prefix))) {
        className += (className && " ") + prefix + value
      }
    }
  } else {
    for (var i in classes) {
      if (classes.hasOwnProperty(i) && (value = classes[i])) {
        className += (className && " ") + cc(value, prefix + i)
      }
    }
  }

  return className
}
