import cc from "classcat"

let className: string

className = cc("btn")

className = cc(12)

className = cc({
  btn: true
})

className = cc(["btn", "btn-active"])

className = cc([
  "btn",
  {
    btn: {
      "--success": true
    }
  }
])
