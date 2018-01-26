import cc from "../src"

test("falsey", () => {
  expect(cc({})).toBe("")
  expect(cc([])).toBe("")
  expect(cc(["", null, false, undefined, 0, NaN])).toBe("")
})

test("arrays", () => {
  expect(cc(["foo", "bar", false, "baz"])).toBe("foo bar baz")
})

test("objects", () => {
  expect(
    cc({
      foo: true,
      bar: true,
      quux: false,
      baz: true
    })
  ).toBe("foo bar baz")
})

test("mixed", () => {
  const baz = "baz"
  expect(
    cc([
      "foo",
      "foo-bar",
      {
        [`foo-${baz}`]: !!baz
      }
    ])
  ).toBe("foo foo-bar foo-baz")
})

test("mixed #2", () => {
  expect(
    cc({
      foo: {
        "--bar": [
          "--baz",
          {
            "--qux": true
          }
        ]
      }
    })
  ).toEqual("foo--bar--baz foo--bar--qux")
})

test("prefix", () => {
  expect(
    cc(
      {
        foo: true,
        bar: true,
        quux: false,
        baz: true
      },
      "prefix-"
    )
  ).toBe("prefix-foo prefix-bar prefix-baz")
})

test("deep", () => {
  expect(
    cc([
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

  expect(cc({})).toBe("")

  delete Object.prototype.myFunction
})

test("all child elements false", () => {
  expect(
    cc([
      {
        foo: {
          "--bar": false
        }
      }
    ])
  ).toBe("")
})
