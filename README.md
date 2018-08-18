# Classcat

[![CI](https://img.shields.io/travis/jorgebucaran/classcat/master.svg)](https://travis-ci.org/jorgebucaran/classcat) [![Codecov](https://img.shields.io/codecov/c/github/jorgebucaran/classcat/master.svg)](https://codecov.io/gh/jorgebucaran/classcat) [![npm](https://img.shields.io/npm/v/classcat.svg)](https://www.npmjs.org/package/classcat)

Classcat is a JavaScript function to concatenate classNames declaratively.

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/classcat">classcat</a>
</pre>

Don't want to set up a build environment? Download Classcat from a CDN and it will be globally available through the `window.classcat` object. Classcat works in all browsers >= IE9.

```html
<script src="https://unpkg.com/classcat"></script>
```

## Usage

Classcat is a unary function expecting an array of elements _or_ an object of key/value pairs and returns a string that is the result of joining all the elements in the array or object keys.

```js
import cc from "classcat"

cc(["foo", "bar"]) //=> "foo bar"

cc(["foo", { bar: true }]) //=> "foo bar"

cc(["foo", { bar: true, fum: false }, "baz"]) //=> "foo bar baz"
```

[Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) array elements and object properties will be ignored.

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

Here is an example styling a button that can be toggled on or off. Go ahead and [try it online](https://codepen.io/jorgebucaran/pen/NYgLwG?editors=0010).

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
classnames × 3,187,131 ops/sec
<em>classcat × 15,132,350 ops/sec</em>

# Objects
classnames × 3,314,869 ops/sec
<em>classcat × 20,206,909 ops/sec</em>

# Strings & Objects
classnames × 2,937,509 ops/sec
<em>classcat × 11,734,207 ops/sec</em>

# Arrays
classnames × 903,155 ops/sec
<em>classcat × 4,270,378 ops/sec</em>

# Arrays & Objects
classnames × 2,342,018 ops/sec
<em>classcat × 5,083,398 ops/sec</em>
</pre>

## Comparisons

Classcat operates similarly to JedWatson/classNames. The only difference is that classNames takes a [variable number of arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) whereas classcat takes a single argument.

```js
cc("foo", "bar", "baz") //=> "foo"
```

To work around this, wrap the arguments inside an array.

```js
cc(["foo", "bar", "baz"]) //=> "foo bar baz"
```

## License

Classcat is MIT licensed. See [LICENSE](LICENSE.md).
