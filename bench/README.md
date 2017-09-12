# Benchmarks

Classwrap vs Classnames benchmarks.

## Run

```
npm i && node .
```

## Results

Please be aware that results may vary across browsers and different node runtimes.

<pre>
<b>classwrap – Strings x 31,562,579 ops/sec ±1.00% (95 runs sampled)</b>
classnames – Strings x 4,090,017 ops/sec ±0.97% (97 runs sampled)

> Fastest is classwrap – Strings

<b>classwrap – Objects x 5,799,267 ops/sec ±1.20% (93 runs sampled)</b>
classnames – Objects x 3,960,623 ops/sec ±0.70% (95 runs sampled)

> Fastest is classwrap – Objects

<b>classwrap – Strings & Objects x 29,205,143 ops/sec ±0.83% (95 runs sampled)</b>
classnames – Strings & Objects x 2,700,055 ops/sec ±0.82% (98 runs sampled)

> Fastest is classwrap – Strings & Objects

<b>classwrap – Mixed x 28,179,169 ops/sec ±1.01% (91 runs sampled)</b>
classnames – Mixed x 1,278,122 ops/sec ±1.13% (97 runs sampled)

> Fastest is classwrap – Mixed

<b>classwrap – Arrays x 2,524,879 ops/sec ±0.78% (93 runs sampled)</b>
classnames – Arrays x 510,376 ops/sec ±0.85% (96 runs sampled)

> Fastest is classwrap – Arrays
</pre>
