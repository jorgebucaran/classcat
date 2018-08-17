import cc from "classcat"

let className: string

className = cc(0)
className = cc("btn")
className = cc(["btn", "btn-active"])
className = cc([["btn", "btn-active"]])
className = cc({ btn: true })
className = cc([{ btn: true }])
