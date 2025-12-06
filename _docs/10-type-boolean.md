# 10. Type: boolean

Booleans store true/false value.

```v
module main

fn main() {
  terms_of_use_accepted := false

  if terms_of_use_accepted {
    println("Creating your account...")
  } else {
    println("You must accept the terms of conditions.")
  }
}
```
