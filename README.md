# Classcat

[![Travis CI](https://img.shields.io/travis/jorgebucaran/classcat/master.svg)](https://travis-ci.org/jorgebucaran/classcat) [![Codecov](https://img.shields.io/codecov/c/github/jorgebucaran/classcat/master.svg)](https://codecov.io/gh/jorgebucaran/classcat) [![npm](https://img.shields.io/npm/v/classcat.svg)](https://www.npmjs.org/package/classcat)

Classcat is a JavaScript function for conditionally concatenating CSS classes.

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/classcat">classcat</a>
</pre>

Don't want to set up a build environment? Download Classcat from a CDN and it will be globally available through the `window.classcat` object. Classcat works in all browsers >= IE9.

```html
<script src="https://unpkg.com/classcat"></script>
```

## Usage

Here is a button you can toggle on or off. Go ahead and [try it online](https://codepen.io/jorgebucaran/pen/NYgLwG).

```js
import cc from "classcat"

export function ToggleButton({ toggle, isOn }) {
  return (
    <div class="btn" onclick={toggle}>
      <div
        class={cc({
          circle: true,
          off: !isOn,
          on: isOn
        })}
      />
      <span
        class={cc({
          textOff: !isOn
        })}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </div>
  )
}
```

Classcat is a unary function (accepts a single argument) expecting an array of elements or an object of keys and returns a string that is the result of joining all elements of the array or object keys.

If the value associated with a given key is false or evaluates to false it will be ignored.

```js
cc([
  "btn",
  {
    "btn-active": true,
    "btn-large": false
  }
]) // => btn btn-active
```

## Benchmarks

All benchmarks run on a 2.4GHz Intel Core i7 CPU with 16 GB memory. Please be aware that results may vary across browsers and Node.js runtimes.

```
npm run bench
```

<pre>
<em>Classcat – Strings × 11,992,788 ops/sec</em>
classNames – Strings × 3,615,118 ops/sec
Fastest is Classcat – Strings

<em>Classcat – Objects × 15,036,351 ops/sec</em>
classNames – Objects × 3,631,691 ops/sec
Fastest is Classcat – Objects

<em>Classcat – Strings & Objects × 9,677,306 ops/sec</em>
classNames – Strings & Objects × 3,405,325 ops/sec
Fastest is Classcat – Strings & Objects

<em>Classcat – Mixed × 5,186,675 ops/sec</em>
classNames – Mixed × 2,487,460 ops/sec
Fastest is Classcat – Mixed

<em>Classcat – Arrays × 3,225,468 ops/sec</em>
classNames – Arrays × 818,056 ops/sec
Fastest is Classcat – Arrays
</pre>

## License

Classcat is MIT licensed. See [LICENSE](LICENSE.md).
