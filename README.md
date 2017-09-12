# Classwrap
[![Travis CI](https://img.shields.io/travis/jbucaran/classwrap/master.svg)](https://travis-ci.org/jbucaran/classwrap)
[![Codecov](https://img.shields.io/codecov/c/github/jbucaran/classwrap/master.svg)](https://codecov.io/gh/jbucaran/classwrap)
[![npm](https://img.shields.io/npm/v/classwrap.svg)](https://www.npmjs.org/package/classwrap)

Classwrap is a (320B) JavaScript function for conditionally concatenating [classNames](https://developer.mozilla.org/en-US/docs/Web/API/Element/className).

## Hello World

[Try it Online](https://codepen.io/jbucaran/pen/GMRjRB)

```js
function HelloButton(props) {
  const name = classwrap([
    "btn",
    "btn-large",
    {
      "btn-pressed": props.isPressed
    }
  ])
  return <button class={name}>{props.label}</button>
}
```

## Installation

Install with npm / Yarn.

<pre>
npm i <a href="https://www.npmjs.com/package/classwrap">classwrap</a>
</pre>

Then with a module bundler like [rollup](https://github.com/rollup/rollup) or [webpack](https://github.com/webpack/webpack), use as you would anything else.

```js
import wrap from "classwrap"
```

Or download the minified library from the [CDN](https://unpkg.com/classwrap).

```html
<script src="https://unpkg.com/classwrap"></script>
```

You can find the library on `window.classwrap`.

## Usage

Classwrap joins all elements of an array or keys of an object into a string. If the value associated with a given key is falsy, that key will be ignored.

```js
classwrap([
  "btn",
  {
    "btn-active": true,
    "btn-large": false
  }
]) // => btn btn-active
```

Nested arrays or objects are supported too. This feature can be useful to create classes with a similar prefix.

```js
classwrap([
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

Classwrap was inspired by [JedWatson/classnames](https://github.com/JedWatson/classnames) with support for nested objects and [improved](/bench/README.md) performance.

## License

Classwrap is MIT licensed. See [LICENSE](LICENSE.md).
