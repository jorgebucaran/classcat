const benchmark = require("benchmark")

module.exports = (wrap, cx, fixture, log) => {
  const suite = new benchmark.Suite()

  suite.add(`classwrap – ${fixture.description}`, () => {
    wrap.apply({}, fixture.args)
  })
  suite.add(`classnames – ${fixture.description}`, () => {
    cx.apply({}, fixture.args)
  })

  suite.on("cycle", event => log(event.target + ""))

  suite.on("complete", function() {
    log(`\n> Fastest is ${this.filter("fastest").pluck("name")} \n`)
  })

  suite.on("error", ({ target }) => {
    log(target.error.message)
    throw target.error
  })

  suite.run()
}
