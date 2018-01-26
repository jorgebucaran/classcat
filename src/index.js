export default function cc(classes, prefix) {
  var value
  var classNames = ""
  var type = typeof classes

  prefix = prefix || ""

  if (type === "boolean") {
    return classes ? prefix : ""
  }

  if (type === "string" || type === "number") {
    return prefix + (classes || "")
  }

  if (Array.isArray(classes) && classes.length > 0) {
    for (var i = 0, len = classes.length; i < len; i++) {
      if ((value = cc(classes[i], prefix))) {
        classNames += (classNames && " ") + value
      }
    }
  } else if (type === "object") {
    for (var key in classes) {
      if ((value = cc(classes[key], prefix + key))) {
        classNames += (classNames && " ") + value
      }
    }
  }

  return classNames
}

/*
    case "object":
      for (var key in classes) {
        if (next = cc(classes[key], prefix + (isNaN(key) ? key : ""))) {
          classNames += (classNames ? " " : "") + next;
        }
      }
      return classNames;
      */
