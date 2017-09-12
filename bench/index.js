const cx = require("classnames")
const wrap = require("../")
const run = require("./run")

require("./fixtures").map(fixed => {
  run(wrap, cx, fixed, console.log)
})
