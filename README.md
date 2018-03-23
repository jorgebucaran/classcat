# Classcat

[![Travis CI](https://img.shields.io/travis/jorgebucaran/classcat/master.svg)](https://travis-ci.org/jorgebucaran/classcat) [![Codecov](https://img.shields.io/codecov/c/github/jorgebucaran/classcat/master.svg)](https://codecov.io/gh/jorgebucaran/classcat) [![npm](https://img.shields.io/npm/v/classcat.svg)](https://www.npmjs.org/package/classcat)

Classcat is a JavaScript function for conditionally concatenating CSS [class names](https://developer.mozilla.org/en-US/docs/Web/API/Element/className).

[Try it live here](https://codepen.io/jorgebucaran/pen/NYgLwG).

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

Classcat works in all browsers >= IE9 and you can use it with your favorite JavaScript UI library.

## Installation

Install with npm or Yarn.

<pre>
npm i <a href="https://www.npmjs.com/package/classcat">classcat</a>
</pre>

Then with a module bundler such as [Rollup](https://github.com/rollup/rollup) or [Webpack](https://github.com/webpack/webpack), use as you would anything else.

```js
import cc from "classcat"
```

If you prefer not to use a build system, you can load Classcat from a CDN and it will be globally available through the <samp>window.classcat</samp> object.

```html
<script src="https://unpkg.com/classcat"></script>
```

## Usage

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

## Prior Art

Classcat is a [faster](/bench/README.md) alternative to [JedWatson/classNames](https://github.com/JedWatson/classnames). The difference between classcat and classNames is that classNames accepts a [variable number of arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments), whereas classcat only accepts a single argument.

```js
cc("foo", "bar", "baz") // => foo
```

To work around this, wrap the arguments inside an array.

```js
cc(["foo", "bar", "baz"]) // => foo bar baz
```

## License

Classcat is MIT licensed. See [LICENSE](LICENSE.md).
