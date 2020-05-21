import classcat from "../../src/index"
import classnames from "classnames"
import clsx from "clsx"
import { runBenchmark } from "./runBenchmark"

runBenchmark(
  [
    {
      name: "# Strings",
      args: ["one", "two", "three"],
    },
    {
      name: "# Objects",
      args: [
        {
          one: true,
          two: true,
          three: false,
        },
      ],
    },
    {
      name: "# Strings/Objects",
      args: [
        "one",
        "two",
        {
          four: true,
          three: false,
        },
      ],
    },
    {
      name: "# Arrays",
      args: [
        ["one", "two"],
        ["three"],
        ["four", ["five"]],
        [
          {
            six: true,
          },
          {
            seven: false,
          },
        ],
      ],
    },
    {
      name: "# Arrays/Objects",
      args: [
        "one",
        {
          two: true,
          three: false,
        },
        {
          four: "foo",
          five: true,
        },
        6,
        {},
      ],
    },
    {
      name: "# Arguments vs Array",
      args: [
        ["one", "two"],
        ["three"],
        ["four", ["five"]],
        [
          {
            six: true,
          },
          {
            seven: false,
          },
        ],
      ],
      unique: true,
    },
  ].reduce(
    (t, { name, args, unique }) => ({
      ...t,
      [name]: unique
        ? (c, id) => (id === "classcat" ? c(args) : c(...args))
        : (c) => c(args),
    }),
    {}
  ),
  { classcat, classnames, clsx }
)
