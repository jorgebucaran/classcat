# Benchmarks

[Classcat](../README.md) vs. [classNames](https://github.com/JedWatson/classnames) benchmarks.

## Run

```
npm i && node .
```

## Results

Please be aware that results may vary across browsers and Node.js runtimes. All tests run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

<pre>
<b>Classcat – Strings × 31,836,467 ops/sec</b>
classNames – Strings × 3,751,299 ops/sec
Fastest is Classcat – Strings

<b>Classcat – Objects × 6,385,707 ops/sec</b>
classNames – Objects × 3,260,164 ops/sec
Fastest is Classcat – Objects

<b>Classcat – Strings & Objects × 31,213,754 ops/sec</b>
classNames – Strings & Objects × 3,000,682 ops/sec
Fastest is Classcat – Strings & Objects

<b>Classcat – Mixed × 29,953,843 ops/sec</b>
classNames – Mixed × 2,126,420 ops/sec
Fastest is Classcat – Mixed

<b>Classcat – Arrays × 3,628,801 ops/sec</b>
classNames – Arrays × 915,020 ops/sec
Fastest is Classcat – Arrays
</pre>
