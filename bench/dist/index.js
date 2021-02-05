'use strict';

var clsx = require('clsx');
var benchmark = require('benchmark');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);

// const isArray = Array.isArray

function cc(names) {
  if (typeof names === "string" || typeof names === "number") return "" + names

  let out = "";

  if (Array.isArray(names)) {
    for (let i = 0, tmp; i < names.length; i++) {
      if ((tmp = cc(names[i])) !== "") {
        out += (out && " ") + tmp;
      }
    }
  } else {
    for (let k in names) {
      if (names[k]) out += (out && " ") + k;
    }
  }

  return out
}

const runBenchmark = (tests, modules) =>
  Object.keys(tests).map((name, i) => {
    console.log(`${i > 0 ? "\n" : ""}${name}`);
    Object.keys(modules)
      .reduce(
        (bench, id) => bench.add(id, tests[name].bind({}, modules[id], id)),
        new benchmark.Suite().on("cycle", ({ target: { name, hz } }) =>
          console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec`)
        )
      )
      .run();
  });

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
  { classcat: cc,  clsx: clsx__default['default'] }
);
