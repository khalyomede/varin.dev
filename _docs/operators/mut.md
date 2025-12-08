# mut

To allow a variable to be modified, declare is as mutable using the `mut` keyword.

```v
module main

fn main() {
  mut user_name := "John"

  user_name = "Elena"

  println("Hello " + user_name)
}
```
