const { Suite } = require("benchmark")
const cx = require("classnames")
const cc = require("../")

require("./fixtures").map((fixed, index, { length }) => {
  const suite = new Suite()
  const args = fixed.args.length > 1 ? fixed.args : fixed.args[0];

  suite
    .add(`Classcat – ${fixed.description}`, () => cc(args))
    .add(`classNames – ${fixed.description}`, fixed.args.length > 1 ? () => cx.apply(null, args) : () => cx(args))
    .on("cycle", ({ target: { name, hz, stats } }) =>
      console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec`)
    )
    .on("complete", function() {
      console.log(
        `Fastest is ${this.filter("fastest").map("name")}${
          index + 1 < length ? "\n" : ""
        }`
      )
    })
    .run()
})
