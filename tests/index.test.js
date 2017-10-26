import cw from "../src"

test("falsy", () => {
  expect(cw({})).toBe("")
  expect(cw([])).toBe("")
  expect(cw(["", null, false, undefined, 0, NaN])).toBe("")
})

test("arrays", () => {
  expect(cw(["foo", "bar", false, "baz"])).toBe("foo bar baz")
})

test("objects", () => {
  expect(
    cw({
      foo: true,
      bar: true,
      quux: false,
      baz: true
    })
  ).toBe("foo bar baz")
})

test("mix", () => {
  const baz = "baz"
  expect(
    cw([
      "foo",
      "foo-bar",
      {
        [`foo-${baz}`]: !!baz
      }
    ])
  ).toBe("foo foo-bar foo-baz")
})

test("prefix", () => {
  expect(
    cw(
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
    cw([
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

test("not owned props", () => {
  Object.prototype.myFunction = () => {}

  expect(cw({})).toBe("")

  delete Object.prototype.myFunction
})
