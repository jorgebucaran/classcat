# Benchmarks

[Classwrap](../README.md) vs. [JedWatson/classnames](https://github.com/JedWatson/classnames) benchmarks.

## Run

```
npm i && node .
```

## Results

Please be aware that results may vary across browsers and Node.js runtimes. All results run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

<pre>
classwrap – Strings x <b>31,989,110</b> ops/sec ±0.88% (95 runs sampled)
classnames – Strings x 4,023,323 ops/sec ±0.84% (93 runs sampled)

<b>Fastest is classwrap – Strings</b>

classwrap – Objects x <b>5,153,511</b> ops/sec ±0.85% (98 runs sampled)
classnames – Objects x 3,840,956 ops/sec ±0.86% (97 runs sampled)

<b>Fastest is classwrap – Objects</b>

classwrap – Strings & Objects x <b>30,230,884</b> ops/sec ±0.89% (94 runs sampled)
classnames – Strings & Objects x 2,697,613 ops/sec ±0.99% (97 runs sampled)

<b>Fastest is classwrap – Strings & Objects</b>

classwrap – Mixed x <b>29,473,452</b> ops/sec ±0.96% (91 runs sampled)</b>
classnames – Mixed x 1,577,708 ops/sec ±0.93% (94 runs sampled)

<b>Fastest is classwrap – Mixed</b>

classwrap – Arrays x <b>2,488,897</b> ops/sec ±0.83% (95 runs sampled)
classnames – Arrays x 754,558 ops/sec ±0.82% (95 runs sampled)

<b>Fastest is classwrap – Arrays</b>
</pre>
