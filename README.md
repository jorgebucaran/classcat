# Classcat [![npm](https://img.shields.io/npm/v/classcat.svg?label=&color=0080FF)](https://github.com/jorgebucaran/classcat/releases/latest) [![Travis CI](https://img.shields.io/travis/jorgebucaran/classcat.svg?label=)](https://travis-ci.org/jorgebucaran/classcat)

> Build a space-separated [class attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) quickly.

- Easily add and remove class names based on a truthy or falsy value.
- Works with any view framework—React, Preact, Hyperapp—your pick!
- Up to 5x faster than the alternatives ([run the benchmarks](#run-the-benchmarks)).
- Tiny ([260B](http://bundlephobia.com/result?p=classcat)) and no dependencies.

## Quickstart

```console
npm i classcat
```

Don't want to set up a build step? Import Classcat in a `<script>` tag as a module. Don't worry; modules are supported in all evergreen, self-updating desktop, and mobile browsers.

```html
<script type="module">
  import cc from "https://unpkg.com/classcat"
</script>
```

Here's the first example to get you started: [a toggle button](https://codepen.io/jorgebucaran/pen/NYgLwG?editors=0010).

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

The `cc` function takes a list of class names as an array or object of name-value pairs and joins all the [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) values into a space-separated string. Arrays can also contain objects and even nested arrays. That's really all there is to it!

## API

### `cc(string | number | object | array)`

```js
import cc from "classcat"

cc("foo") //=> "foo"

cc(["foo", "bar", "baz"]) //=> "foo bar baz"

cc({ foo: false, bar: null, baz: undefined }) //=> ""

cc({ foo: true, bar: false, baz: true }) //=> "foo baz"

cc([{ foo: true, bar: false }, "baz"]) //=> "foo baz"
```

## Run the benchmarks

```console
npm run build && npm i -C bench && npm -C bench start
```

```console
# Strings
classcat × 20,689,684 ops/sec
classnames × 4,189,458 ops/sec

# Objects
classcat × 25,207,387 ops/sec
classnames × 4,479,830 ops/sec

# Strings/Objects
classcat × 15,050,993 ops/sec
classnames × 3,731,854 ops/sec

# Arrays
classcat × 5,333,405 ops/sec
classnames × 1,120,879 ops/sec

# Arrays/Objects
classcat × 6,907,586 ops/sec
classnames × 2,786,756 ops/sec
```

## License

[MIT](LICENSE.md)
