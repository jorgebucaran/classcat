import wrap from "../src"

test("falsy", () => {
  expect(wrap({})).toBe("")
  expect(wrap([])).toBe("")
  expect(wrap(["", null, false, undefined, 0, NaN])).toBe("")
})

test("arrays", () => {
  expect(wrap(["foo", "bar", false, "baz"])).toBe("foo bar baz")
})

test("objects", () => {
  expect(
    wrap({
      foo: true,
      bar: true,
      quux: false,
      baz: true
    })
  ).toBe("foo bar baz")
})

test("mix", () => {
  expect(
    wrap([
      "foo",
      {
        bar: true,
        baz: false
      }
    ])
  ).toBe("foo bar")
})

test("prefix", () => {
  expect(
    wrap(
      {
        foo: true,
        bar: true,
        quux: false,
        baz: true
      },
      "-"
    )
  ).toBe("foo-bar-baz")
})

test("deep", () => {
  expect(
    wrap([
      "foo",
      {
        foo: {
          "-bar": {
            "-baz": {
              "--wrap": [1, 2]
            }
          }
        }
      }
    ])
  ).toBe("foo foo-bar-baz--wrap1 foo-bar-baz--wrap2")
})
