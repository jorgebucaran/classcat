export default function wrap(classes, prefix = " ") {
  let value
  let className = ""
  let type = typeof classes

  if ((classes && type === "string") || type === "number") {
    return classes
  }

  if (Array.isArray(classes) && classes.length) {
    for (let i = 0; i < classes.length; i++) {
      if ((value = wrap(classes[i], prefix))) {
        className += (className && prefix) + value
      }
    }
  } else {
    for (let i in classes) {
      if ((value = classes[i])) {
        className +=
          (className && prefix) +
          i +
          (typeof value === "object" ? wrap(value, prefix + i) : "")
      }
    }
  }

  return className
}
