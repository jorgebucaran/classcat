import cc from "../src/index.js"

test("falsey", () => {
  expect(cc({})).toBe("")
  expect(cc([])).toBe("")
  expect(cc(["", null, false, undefined, 0, NaN])).toBe("")
})

test("arrays", () => {
  expect(cc(["foo", "bar", false, "baz"])).toBe("foo bar baz")
})

test("array with length 1", () => {
  expect(cc(['foo'])).toBe('foo');
});

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

test('nested arrays', () => {
  expect(cc(["foo", ["bar"], [["foo2", ["bar2"]]]])).toBe("foo bar foo2 bar2")
})
test("not owned props", () => {
  Object.prototype.myFunction = () => {}

  expect(cc({})).toBe("")

  delete Object.prototype.myFunction
})

test('Just a string', () => {
  expect(cc('foo')).toBe('foo');
});

test('Just a number', () => {
  expect(cc(21)).toBe('21');
});

test('Pass through falsy string but not 0', () => {
  expect(cc('')).toBe('');
  expect(cc(0)).toBe('0');
});
