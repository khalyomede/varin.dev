# 11. Type: integer

Integers represent numbers without floating points.

```v
module main

fn main() {
  cores := 8

  println("Starting web server using ${cores} cores...")
}
```

By default, all your numbers will be infered as `int` by the V compiler.

This is the exact same as casting your numbers as `int`:

```v
module main

fn main() {
  cores := int(8)

  println("Starting web server using ${cores} cores...")
}
```

## Big numbers separator

If you want to write big numbers easier, you can use the `_` character to separate digits. This character is ignored during calculus and display.

```v
module main

fn main() {
  order_amount := 2_500

  println("Your order is ${order_amount_in_cents} $.")
}
```

```
Your order is 2500 $.
```

## Unsigned integers

Unsigned integers are numbers that only allow 0 or positive values.

```v
module main

fn main() {
  port := u16(3306)

  println("Connecting to MySQL on port ${port}...")
}
```

There is different kind of unsigned integers depending on the size you need.

- `u8`: from 0 to 255 (2<sup>^8</sup>)
- `u16`: from 0 to 65,535 (2<sup>^16</sup>)
- `u32`: from 0 to 4,294,967,295 (2<sup>^32</sup>)
- `u64`: from 0 to 18,446,744,073,709,551,615 (2<sup>^64</sup>)

```v
module main

fn main() {
  port := u16(3306)
  cores := u8(33)
  max_buffer_pool_bytes := u32(4_000_000)

  println("Starting MySQL on port ${port}")
  println("using ${cores} cores")
  println("max memory: ${max_buffer_pool_bytes})")
}
```

::: info
When you know the minimum and maximum, choosing the correct type can drastically reduce the memory footprint of your programs.
:::

## Signed integers

Signed integers hold a positive or a negative value.

```v
module main

fn main() {
  current_temperature_fahrenheit := i16(-2)

  println("The current temperature is ${current_temperature_fahrenheit} °F")
}
```

There is different kind of unsigned integers depending on the size you need.

- `i8`: from -128 to 127 (2<sup>^8</sup>)
- `i16`: from -32,768 to 32,767 (2<sup>^16</sup>)
- `i32`: from -2,147,483,648 to 2,147,483,647 (2<sup>^32</sup>)
- `i64`: from -9,223,372,036,854,775,808 to -9,223,372,036,854,775,807 (2<sup>^64</sup>)

::: info
As signed integers hold a sign (+/-), they hold lower minimas/maximas than their unsigned counterpart.
:::

## Methods

Integers have built-in methods and helpers. Refer to the official documentation:

- [Built-in integer methods](https://github.com/vlang/v/blob/master/vlib/builtin/int.v) documentation
- [Math](https://modules.vlang.io/math.html) built-in module

## Extrema

If you want to know the boundaries of each unsigned or signed integer types, use these constants:

```v
module main

fn main() {
  println("Min i8 is ${min_i8}")
  println("Max i8 is ${max_i8}")

  println("Min u8 is ${min_u8}")
  println("Max u8 is ${max_u8}")

  println("Min int is ${min_int}")
  println("Max int is ${max_int}")
}
```

```
Min i8 is -128
Max i8 is 127
Min u8 is 0
Max u8 is 255
Min int is -2147483648
Max int is 2147483647
```

Works for all integer types:

- `int`
- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`

::: info
The `int` type takes the same boundaries as the `i32` type, **no matter** the architecture or OS.
:::

::: warning
When performing addition of two u8 for example, be careful the result may overflow the maximum of an u8. You should cast the result as an u16 at least.
:::
