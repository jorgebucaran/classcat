# Classcat [![npm](https://img.shields.io/npm/v/classcat.svg?label=&color=0080FF)](https://github.com/jorgebucaran/classcat/releases/latest)

> Build a [class attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) string quickly.

- Easily add and remove class names based on a truthy or falsy value.
- Works best when paired with a view framework. which will it be?
- Up to 2.5x faster than alternatives ([run the benchmarks](#run-the-benchmarks)).
- Ridiculously tiny at [260B](http://bundlephobia.com/result?p=classcat). No dependencies.

## Quickstart

```console
npm i classcat
```

Don't want to set up a build step? Import it inside a `<script>` tag as a module. Don't worry; modules are supported in all evergreen, self-updating desktop, and mobile browsers.

```html
<script type="module">
  import cc from "https://unpkg.com/classcat"
</script>
```

Classcat takes an array of strings or name-value object and joins all the [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) values into a space-separated string. Arrays may be nested too. That's really all there is to it. Here's the [first example](https://codepen.io/jorgebucaran/pen/NYgLwG?editors=0010) to get you started.

```jsx
import cc from "classcat"

export const ToggleButton = ({ isOn }) => (
  <div class="btn">
    <div
      class={cc({
        circle: true,
        off: !isOn,
        on: isOn,
      })}
    />
    <span class={cc({ textOff: !isOn })}>{isOn ? "ON" : "OFF"}</span>
  </div>
)
```

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

## License

[MIT](LICENSE.md)
