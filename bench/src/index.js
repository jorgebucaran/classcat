import classcat from "../../src/index"
import classnames from "classnames"
import { runBenchmark } from "./runBenchmark"

runBenchmark(
  [
    {
      name: "# Strings",
      args: ["one", "two", "three"]
    },
    {
      name: "# Objects",
      args: [
        {
          one: true,
          two: true,
          three: false
        }
      ]
    },
    {
      name: "# Strings & Objects",
      args: [
        "one",
        "two",
        {
          four: true,
          three: false
        }
      ]
    },
    {
      name: "# Arrays",
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
      ]
    },
    {
      name: "# Arrays & Objects",
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
      ]
    }
  ].reduce(
    (t, { name, args }) => ({
      ...t,
      [name]: c => c(args)
    }),
    {}
  ),
  { classnames, classcat }
)
