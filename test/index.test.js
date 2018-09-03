import cc from "../src"
import { equal } from "testmatrix"

export default {
  classcat: [
    {
      name: "empty object",
      class: {},
      expected: ""
    },
    {
      name: "empty array",
      class: [],
      expected: ""
    },
    {
      name: "falsy arguments",
      class: ["", null, false, undefined, 0, NaN],
      expected: ""
    },
    {
      name: "array of class names",
      class: ["foo", "bar", false, "baz"],
      expected: "foo bar baz"
    },
    {
      name: "array of arrays",
      class: ["foo", ["bar", [false, "baz"]]],
      expected: "foo bar baz"
    },
    {
      name: "object of class names",
      class: {
        foo: true,
        bar: true,
        quux: false,
        baz: true
      },
      expected: "foo bar baz"
    },
    {
      name: "array of objects and arrays",
      class: [
        "foo",
        "foo-bar",
        {
          "foo-baz": true
        },
        ["fum", "bam", "pow"]
      ],
      expected: "foo foo-bar foo-baz fum bam pow"
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
