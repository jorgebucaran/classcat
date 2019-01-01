# Classcat

[![CI](https://img.shields.io/travis/jorgebucaran/classcat/master.svg)](https://travis-ci.org/jorgebucaran/classcat) [![Codecov](https://img.shields.io/codecov/c/github/jorgebucaran/classcat/master.svg)](https://codecov.io/gh/jorgebucaran/classcat) [![npm](https://img.shields.io/npm/v/classcat.svg)](https://www.npmjs.org/package/classcat)

Classcat is a declarative string builder for DOM [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) properties.

Each class can be conditionally added and removed depending on the falsiness of the value it is paired with. Here is a button you can toggle on and off. Go ahead and [try it online](https://codepen.io/jorgebucaran/pen/NYgLwG?editors=0010).

```jsx
import cc from "classcat"

export const ToggleButton = ({ isOn }) => (
  <div class="btn">
    <div
      class={cc({
        circle: true,
        off: !isOn,
        on: isOn
      })}
    />
    <span class={cc({ textOff: !isOn })}>{isOn ? "ON" : "OFF"}</span>
  </div>
)
```

## Features

- Tiny ([300B](https://bundlephobia.com/result?p=classcat))
- Zero dependency
- 5x [faster](#benchmark-results) drop-in replacement for JedWatson/classNames
- Framework agnostic — use with React, Preact, Hyperapp — your choice!

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/classcat">classcat</a>
</pre>

Don't want to set up a build environment? Download classcat from a CDN and it will be globally available through the `window.classcat` object. Classcat works in all browsers >= IE9.

```html
<script src="https://unpkg.com/classcat"></script>
```

## Usage

Classcat expects an array of elements _or_ an object of key/value pairs and joins all the elements in the array and object keys. [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) array elements and object properties will be ignored. Single string or number values need not be in an array.

```jsx
import cc from "classcat"

cc("foo") //=> "foo"

cc({ foo: true, bar: false }) //=> "foo"

cc([{ foo: true, bar: false }, "baz"]) //=> "foo baz"

cc([null, { foo: true, bar: false }, "baz", 0, undefined]) //=> "foo baz"
```

Arrays will be recursively flattened as per the rules above.

```jsx
cc(["foo", ["bar", { baz: true, bam: false }]]) //=> "foo bar baz"
```

[Variable number of arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) are not supported. Wrap multiple arguments in an array.

```js
cc("foo", "bar", "baz") //=> "foo"
```

Use to set the class/className of an element created with your chosen view framework.

```jsx
const popupView = popup => (
  <div
    class={cc({
      popup: true,
      "popup-important": popup.isImportant,
      "popup-seen": popup.isSeen
    })}
  >
    {popup.content}
  </div>
)
```

## API

### default(names)

#### names

A number, string, object or array. Objects consist of className/value pairs. Arrays are recursively reduced, therefore elements can be of any type aforementioned. Truthy values are added to the output, falsy values are ignored.

```js
cc(["foo", "bar", { baz: true, bam: false }, undefined]) //=> "foo bar baz"
```

## Benchmark Results

All benchmarks run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

```
npm run build && npm i -C bench && npm -C bench start
```

<pre>
# Strings
<em>classcat × 15,009,674 ops/sec</em>
classnames × 3,191,312 ops/sec
clsx × 2,563,378 ops/sec

# Objects
<em>classcat × 20,053,517 ops/sec</em>
classnames × 3,479,564 ops/sec
clsx × 2,509,453 ops/sec

# Strings & Objects
<em>classcat × 11,317,394 ops/sec</em>
classnames × 3,006,549 ops/sec
clsx × 2,100,306 ops/sec

# Arrays
<em>classcat × 4,142,953 ops/sec</em>
classnames × 986,519 ops/sec
clsx × 531,326 ops/sec

# Arrays & Objects
<em>classcat × 4,892,534 ops/sec</em>
classnames × 2,354,448 ops/sec
clsx × 1,194,463 ops/sec
</pre>

## License

Classcat is MIT licensed. See [LICENSE](LICENSE.md).
