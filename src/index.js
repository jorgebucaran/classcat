export default function cc(classes) {
  var out = ""

  if (Array.isArray(classes)) {
    if (classes.length > 0) {
      var i = 0;
      var len = classes.length;

      for (; i < len; i++) {
        var t = typeof classes[i];

        var next = t !== 'string' && t !== 'number' ? cc(classes[i]) : classes[i]
        if (next) {
          out += (out && " ") + next
        }
      }
    }

  } else {
    var type = typeof classes

    if (type === "string") {
      return classes || "";
    } else if(type === "number") {
      return ""+classes;
    }

    for (var key in classes) {
      if (classes.hasOwnProperty(key) && classes[key]) {
        out += (out && " ") + key
      }
    }
  }

  return out
}
