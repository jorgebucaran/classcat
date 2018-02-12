var buffer = []
export default function cc(classes, nested) {
  if (!nested) {
    buffer.length = 0
    cc(classes, true)
    return buffer.join(" ")
  }
  var type = typeof classes

  if (type === "string" || type === "number") {
    if (classes) buffer.push(classes)
  } else if (Array.isArray(classes)) {
    for (var i = 0; i < classes.length; i++) {
      cc(classes[i], true)
    }
  } else {
    for (var key in classes) {
      if (classes.hasOwnProperty(key) && classes[key]) {
        buffer.push(key)
      }
    }
  }
}
