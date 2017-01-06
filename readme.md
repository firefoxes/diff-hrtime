#diff-hrtime

Calculating the difference between two hrtime[sec, nanosec] pair structures

#Installation
```npm install diff-hrtime --save```

#usage
```diff-hrtime``` receives 2 hrtime arrays [seconds, nanoseconds] and returns a relative time in the same previous form.

```javascript
import diffHrtime from 'diff-hrtime';

const = timestamp1 = process.hrtime();

// do stuff...

const = timestamp2 = process.hrtime();

const relative_timestamp = diffHrtime(timestamp1, timestamp2);
