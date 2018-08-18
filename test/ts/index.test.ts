import cc from "classcat"

console.log(
  [
    0,
    "btn",
    ["btn", "btn-active"],
    [["btn", "btn-active"]],
    { btn: true },
    [{ btn: true }]
  ].map(cc)
)
