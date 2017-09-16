import classwrap from "classwrap"

let className: string

className = classwrap("btn")

className = classwrap(12)

className = classwrap({
  btn: true
})

className = classwrap(["btn", "btn-active"])

className = classwrap([
  "btn",
  {
    btn: {
      "--success": true
    }
  }
])
