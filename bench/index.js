const benchmark = require("benchmark")
const classnames = require("classnames")
const classwrap = require("../")

require("./fixtures").map(fixed => {
  const suite = new benchmark.Suite()

  suite.add(`classwrap – ${fixed.description}`, () => {
    classwrap.apply({}, fixed.args)
  })

  suite.add(`classnames – ${fixed.description}`, () => {
    classnames.apply({}, fixed.args)
  })

  suite.on("cycle", event => console.log(event.target + ""))

  suite.on("complete", function() {
    console.log(`\nFastest is ${this.filter("fastest").pluck("name")} \n`)
  })

  suite.on("error", ({ target }) => {
    console.log(target.error.message)
    throw target.error
  })

  suite.run()
})
