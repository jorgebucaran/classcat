export default [
  {
    description: "Strings",
    args: ["one", "two", "three"],
    expected: "one two three"
  },
  {
    description: "Objects",
    args: [
      {
        one: true,
        two: true,
        three: false
      }
    ],
    expected: "one two"
  },
  {
    description: "Strings & Objects",
    args: [
      "one",
      "two",
      {
        four: true,
        three: false
      }
    ],
    expected: "one two four"
  },
  {
    description: "Mixed",
    args: [
      "one",
      {
        two: true,
        three: false
      },
      {
        four: "foo",
        five: true
      },
      6,
      {}
    ],
    expected: "one two four five 6"
  },
  {
    description: "Arrays",
    args: [
      ["one", "two"],
      ["three"],
      ["four", ["five"]],
      [
        {
          six: true
        },
        {
          seven: false
        }
      ]
    ],
    expected: "one two three four five six"
  }
]
