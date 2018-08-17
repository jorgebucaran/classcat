import cc from "../src"
import { equal } from "testmatrix"

export default {
  classcat: [
    {
      name: "an empty object",
      class: {},
      expected: ""
    },
    {
      name: "an empty array",
      class: [],
      expected: ""
    },
    {
      name: "falsey arguments",
      class: ["", null, false, undefined, 0, NaN],
      expected: ""
    },
    {
      name: "an array of classnames",
      class: ["foo", "bar", false, "baz"],
      expected: "foo bar baz"
    },
    {
      name: "an object of classnames",
      class: {
        foo: true,
        bar: true,
        quux: false,
        baz: true
      },
      expected: "foo bar baz"
    },
    {
      name: "an array of objects and arrays",
      class: [
        "foo",
        "foo-bar",
        {
          "foo-baz": true
        }
      ],
      expected: "foo foo-bar foo-baz"
    }
  ]
    .map(({ name, class: c, expected }) => ({
      name,
      assert: equal,
      actual: cc(c),
      expected
    }))
    .concat({
      name: "not owned props",
      assert: equal,
      actual: done => {
        Object.prototype.myFunction = () => {}
        done(cc({}), delete Object.prototype.myFunction)
      },
      expected: ""
    })
}
