# Floating

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

Note that if you do not precise the type (̀`f32` or `f64̀ ), V will infer it and use the most precise type according to the precision needed. See the [Extremas](#extremas) section for more information about the precision.

```v
module main

fn main() {
  // This will be an f64 because f32 only support 8 total digits.
  pi := 3.14159265359
}
```

## Extremas

### f32

`f32` supports up to 8 digits precision in total.

```v
module main

fn main() {
  paris_latitude := f32(48.866669)

  println("Paris latitude is ${paris_latitude}")
}
```

```
Paris latitude is 48.866669
```

But going further than 8 digits will make this number loose its precision:

```v
module main

fn main() {
  paris_latitude := f32(48.8666691001847)

  println("Paris latitude is ${paris_latitude}")
}
```

```
Paris latitude is 48.86667
```

- X.XXXXXXX ✅
- XX.XXXXXX ✅
- ...
- XXXXXXX.X ✅

### f64

`f64` supports up to 16 digits precision in totals.

```v
module main

fn main() {
  gravitational_constant := f64(0.00000000006674)

  println("Gravitional constant value: ${gravitational_constant}")
}
```

```bash
Gravitional constant value: 6.674e-11
```

But going further than 16 digits will make this number loose its precision:

```v
module main

fn main() {
  antartica_latitude := f64(69.12345678910667431234567891)

  println("Antartica latitude: ${gravitational_constant}")
}
```

```
Antartica latitude: 69.12345678910667
```

- X.XXXXXXXXXXXXXX ✅
- XX.XXXXXXXXXXXXX ✅
- ...
- XXXXXXXXXXXXXX.X ✅

### Limits

`f32` and `f64` limits can be obtained programmatically.

```v
import math

fn main() {
	println('f32 min: ${-math.max_f32}')
	println('f32 max: ${math.max_f32}')
	println('f32 minimal value (before zero) ${-math.smallest_non_zero_f32}')
	println('f32 minimal value (after zero) ${math.smallest_non_zero_f32}')

	println('f64 min: ${-math.max_f64}')
	println('f64 max: ${math.max_f64}')
	println('f64 minimal value (before zero) ${-math.smallest_non_zero_f64}')
	println('f64 minimal value (after zero) ${math.smallest_non_zero_f64}')
}

```

```
f32 min: -3.4028234663852886e+38
f32 max: 3.4028234663852886e+38
f32 minimal value (before zero) -1.401298464324817e-45
f32 minimal value (after zero) 1.401298464324817e-45
f64 min: -1.7976931348623157e+308
f64 max: 1.7976931348623157e+308
f64 minimal value (before zero) 0.0
f64 minimal value (after zero) 0.0
```

## Scientific notation

_work in progress._

## Methods

Floats have built-in methods and modules.

- [Built-in float methods](https://github.com/vlang/v/blob/master/vlib/builtin/float.c.v) source code
- [Math module](https://modules.vlang.io/math.html) documentation
