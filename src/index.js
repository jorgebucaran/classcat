export default function wrap(classes, prefix) {
  var value
  var className = ""
  var type = typeof classes

  if (classes && type === "number" && prefix === undefined) {
    throw new Error("Valid CSS selectors cannot begin with a number")
  }

  if ((classes && type === "string") || type === "number") {
    return classes
  }

  prefix = prefix || " "

  if (Array.isArray(classes) && classes.length) {
    for (var i = 0, l = classes.length; i < l; i++) {
      if ((value = wrap(classes[i], prefix))) {
        className += (className && prefix) + value
      }
    }
  } else {
    for (var i in classes) {
      if (classes.hasOwnProperty(i) && (value = classes[i])) {
        className +=
          (className && prefix) +
          i +
          (typeof value === "object" ? wrap(value, prefix + i) : "")
      }
    }
  }

  return className
}
