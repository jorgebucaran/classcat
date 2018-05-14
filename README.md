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

Classcat is a unary function (accepts a single argument) expecting an array of elements or an object of key/value pairs and returns a string that is the result of joining all elements of the array or object keys.

```js
import cc from "classcat"

cc(["foo", "bar"]) // => "foo bar"
cc(["foo", { bar: true }]) // => "foo bar"
cc(["foo", { bar: true, fox: false }, "baz"]) // => "foo bar baz"
```

If an element or key's value is false or evaluates to false it will be ignored.

```js
import cc from "classcat"

cc([
  null,
  false,
  "foo",
  undefined,
  0,
  1,
  {
    bar: null
  }
]) // => "foo 1"
```

Here is an example with a button that can be toggled on or off. Go ahead and [try it online](https://codepen.io/jorgebucaran/pen/NYgLwG?editors=0010).

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

## Benchmarks

All benchmarks run on a 2.4GHz Intel Core i7 CPU with 16 GB memory. Please be aware that results may vary across browsers and Node.js runtimes.

```
npm run bench
```

<pre>
<em>Classcat – Strings × 14,702,005 ops/sec</em>
classNames – Strings × 4,241,378 ops/sec
Fastest is Classcat – Strings

<em>Classcat – Objects × 18,137,476 ops/sec</em>
classNames – Objects × 4,605,831 ops/sec
Fastest is Classcat – Objects

<em>Classcat – Strings & Objects × 10,930,265 ops/sec</em>
classNames – Strings & Objects × 3,884,859 ops/sec
Fastest is Classcat – Strings & Objects

<em>Classcat – Mixed × 6,210,792 ops/sec</em>
classNames – Mixed × 2,898,838 ops/sec
Fastest is Classcat – Mixed

<em>Classcat – Arrays × 3,797,253 ops/sec</em>
classNames – Arrays × 1,014,558 ops/sec
Fastest is Classcat – Arrays
</pre>

## Comparisons

Classcat works similarly to JedWatson/classNames. The difference is that classNames takes a [variable number of arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) whereas Classcat takes a single argument.

```js
cc("foo", "bar", "baz") // => "foo"
```

To work around this, wrap the arguments inside an array.

```js
cc(["foo", "bar", "baz"]) // => "foo bar baz"
```

## License

Classcat is MIT licensed. See [LICENSE](LICENSE.md).
