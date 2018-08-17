import { Suite } from "benchmark"
import cx from "classnames"
import cc from "../../src/index"
import fixtures from "./fixtures"

const bench = ({ testables, tests }) =>
  Object.keys(tests)
    .map(name => ({
      name,
      test: Object.keys(testables).reduce(
        (bench, id) => bench.add(id, tests[name].bind({}, testables[id])),
        new Suite().on("cycle", ({ target: { name, hz } }) =>
          console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec`)
        )
      )
    }))
    .map(({ name, test }, i) => {
      console.log(`${i > 0 ? "\n" : ""}# ${name}`)
      test.run()
    })

bench({
  testables: {
    classnames: args => cx.apply({}, args),
    classcat: cc
  },
  tests: fixtures.reduce(
    (tests, { description, args, expected }) => ({
      ...tests,
      [description]: c => c(args)
    }),
    {}
  )
})
