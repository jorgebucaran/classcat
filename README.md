# Catclass
[![Travis CI](https://img.shields.io/travis/JorgeBucaran/classcat/master.svg)](https://travis-ci.org/JorgeBucaran/classcat)
[![Codecov](https://img.shields.io/codecov/c/github/JorgeBucaran/classcat/master.svg)](https://codecov.io/gh/JorgeBucaran/classcat)
[![npm](https://img.shields.io/npm/v/classcat.svg)](https://www.npmjs.org/package/classcat)

Classcat is a 0.3 KB JavaScript utility for quickly conditionally concatenating [class names](https://developer.mozilla.org/en-US/docs/Web/API/Element/className).

[Try it Online](https://codepen.io/JorgeBucaran/pen/GMRjRB)

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

[![Classcat](https://user-images.githubusercontent.com/56996/30416101-cda83bd4-9965-11e7-9db5-230ba3fc83fd.gif)](https://codepen.io/JorgeBucaran/full/GMRjRB/)

## Installation

Install with npm / Yarn.

<pre>
npm i <a href="https://www.npmjs.com/package/classcat">classcat</a>
</pre>

Then with a module bundler like [Rollup](https://github.com/rollup/rollup) or [Webpack](https://github.com/webpack/webpack), use as you would anything else.

```js
import cc from "classcat"
```

Or download the minified library from a [unpkg](https://unpkg.com/classcat@latest/dist/classcat.js) or [jsDelivr](https://cdn.jsdelivr.net/npm/classcat@latest/dist/classcat.js).

```html
<script src="https://unpkg.com/classcat"></script>
```

Then find it on `window.classcat`.

```js
const cc = classcat
```

## Usage

Classcat joins all elements of an array or keys of an object into a string. If the value associated with a given key is falsy, the key will be ignored.

```js
cc([
  "btn",
  {
    "btn-active": true,
    "btn-large": false
  }
]) // => btn btn-active
```

Nested arrays or objects are supported too. Use this feature to assemble classes with a common prefix.

```js
cc([
  "tab",
  {
    tab: {
      "--success": true,
      "--error": false,
      "--pending": false
    }
  }
]) // => tab tab--success
```

## Credits

Classcat is inspired by [JedWatson/classNames](https://github.com/JedWatson/classnames) with support for nested objects and [better performance](/bench/README.md). It differs from classNames in that it does not accept [variable arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).

```js
cc("foo", "bar", "baz") // => foo
```

To work around this, wrap the arguments inside an array.

```js
cc(["foo", "bar", "baz"]) // => foo bar baz
```

## License

Classcat is MIT licensed. See [LICENSE](LICENSE.md).
