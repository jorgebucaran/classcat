# Benchmarks

[Classcat](../README.md) vs. [classNames](https://github.com/JedWatson/classnames) benchmarks.

## Run

```
npm i && node .
```

## Results

Please be aware that results may vary across browsers and Node.js runtimes. All tests run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

<pre>
<p>Classcat – Strings × 20,162,778 ops/sec</p>
classNames – Strings × 3,911,263 ops/sec
Fastest is Classcat – Strings

<p>Classcat – Objects × 6,270,420 ops/sec</p>
classNames – Objects × 3,294,519 ops/sec
Fastest is Classcat – Objects

<p>Classcat – Strings & Objects × 19,211,576 ops/sec</p>
classNames – Strings & Objects × 3,055,944 ops/sec
Fastest is Classcat – Strings & Objects

<p>Classcat – Mixed × 7,062,106 ops/sec</p>
classNames – Mixed × 2,145,534 ops/sec
Fastest is Classcat – Mixed

<p>Classcat – Arrays × 2,381,984 ops/sec</p>
classNames – Arrays × 951,920 ops/sec
Fastest is Classcat – Arrays
</pre>
