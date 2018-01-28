# Benchmarks

All benchmarks run on a 2.4GHz Intel Core i7 CPU with 16 GB memory. Please be aware that results may vary across browsers and Node.js runtimes.

## Run

```
npm i && node .
```

## Results

<pre>
<em>Classcat – Strings × 10,252,382 ops/sec</em>
classNames – Strings × 3,874,925 ops/sec
Fastest is Classcat – Strings

<em>Classcat – Objects × 7,156,248 ops/sec</em>
classNames – Objects × 3,301,732 ops/sec
Fastest is Classcat – Objects

<em>Classcat – Strings & Objects × 6,138,233 ops/sec</em>
classNames – Strings & Objects × 3,060,083 ops/sec
Fastest is Classcat – Strings & Objects

<em>Classcat – Mixed × 3,675,625 ops/sec</em>
classNames – Mixed × 2,185,575 ops/sec
Fastest is Classcat – Mixed

<em>Classcat – Arrays × 3,056,942 ops/sec</em>
classNames – Arrays × 962,705 ops/sec
Fastest is Classcat – Arrays
</pre>
