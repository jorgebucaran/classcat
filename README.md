# Classcat

[![CI](https://img.shields.io/travis/jorgebucaran/classcat/master.svg)](https://travis-ci.org/jorgebucaran/classcat) [![Codecov](https://img.shields.io/codecov/c/github/jorgebucaran/classcat/master.svg)](https://codecov.io/gh/jorgebucaran/classcat) [![npm](https://img.shields.io/npm/v/classcat.svg)](https://www.npmjs.org/package/classcat)

Classcat is a JavaScript utility function for concatenating CSS classes conditionally.

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

cc(["foo", "bar"]) //=> "foo bar"
cc(["foo", { bar: true }]) //=> "foo bar"
cc(["foo", { bar: true, fum: false }, "baz"]) //=> "foo bar baz"
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
]) //=> "foo 1"
```

Here is an example with a button that can be toggled on or off. Go ahead and [try it online](https://codepen.io/jorgebucaran/pen/NYgLwG?editors=0010).

```jsx
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
      <span class={cc({ textOff: !isOn })}>{isOn ? "ON" : "OFF"}</span>
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
# Strings
classnames × 4,251,336 ops/sec
<em>classcat × 15,182,201 ops/sec</em>

# Objects
classnames × 4,509,972 ops/sec
<em>classcat × 20,418,846 ops/sec</em>

# Strings & Objects
classnames × 3,895,514 ops/sec
<em>classcat × 11,423,799 ops/sec</em>

# Mixed
classnames × 2,941,495 ops/sec
<em>classcat × 6,344,310 ops/sec</em>

# Arrays
classnames × 999,926 ops/sec
<em>classcat × 3,680,937 ops/sec</em>
</pre>

## Comparisons

Classcat operates similarly to JedWatson/classNames. One difference is that classNames takes a [variable number of arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) whereas Classcat takes a single argument.

```js
cc("foo", "bar", "baz") //=> "foo"
```

To work around this, wrap the arguments inside an array.

```js
cc(["foo", "bar", "baz"]) //=> "foo bar baz"
```

## License

Classcat is MIT licensed. See [LICENSE](LICENSE.md).
