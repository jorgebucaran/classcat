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

test("nested", () => {
  const baz = "baz"
  expect(
    cc([
      ["foo"],
      ["foo-bar", [], ["foo-baz"]],
    ])
  ).toBe("foo foo-bar foo-baz")
})


test("not owned props", () => {
  Object.prototype.myFunction = () => {}

  expect(cc({})).toBe("")

  delete Object.prototype.myFunction
})
