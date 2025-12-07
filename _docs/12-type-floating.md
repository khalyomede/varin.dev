# 12. Type: floating

Floating numbers hold decimals after the coma.

```v
module main

fn main() {
  himalaya_lat := 28.598316
  himalaya_lon := 83.931061

  println("Himalaya is at ${himalaya_lat} ${himalaya_lon}")
}
```

As floats are by default f32, this will be the same as casting them as follow:

```v
module main

fn main() {
  himalaya_lat := f32(28.598316)
  himalaya_lon := f32(83.931061)

  println("Himalaya is at ${himalaya_lat} ${himalaya_lon}")
}
```

## Extremas

_work in progress._

## Methods

Floats have built-in methods and modules.

- [Built-in float methods](https://github.com/vlang/v/blob/master/vlib/builtin/float.c.v) source code
- [Math module](https://modules.vlang.io/math.html) documentation
