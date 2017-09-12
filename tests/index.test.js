import classwrap from "../src"

test("falsy", () => {
  expect(classwrap({})).toBe("")
  expect(classwrap([])).toBe("")
  expect(classwrap(["", null, false, undefined, 0, NaN])).toBe("")
})

test("arrays", () => {
  expect(classwrap(["foo", "bar", false, "baz"])).toBe("foo bar baz")
})

test("objects", () => {
  expect(
    classwrap({
      foo: true,
      bar: true,
      quux: false,
      baz: true
    })
  ).toBe("foo bar baz")
})

test("mix", () => {
  expect(
    classwrap([
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
    classwrap(
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
    classwrap([
      "foo",
      {
        foo: {
          "-bar": {
            "-baz": {
              "--classwrap": [1, 2]
            }
          }
        }
      }
    ])
  ).toBe("foo foo-bar-baz--classwrap1 foo-bar-baz--classwrap2")
})
