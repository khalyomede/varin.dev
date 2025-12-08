# Variables

To store intermediary results, use variables.

```v
module main

fn main() {
  user_name := "John"

  println("Hello " + user_name)
}
```

## Immutability

By default, all variables are immutable. This means you cannot change their value once they have been created.

```v
module main

fn main() {
  user_name := "John"

  user_name = "Elena"

  println("Hello " + user_name)
}
```

```bash
main.v:6:3: error: `user_name` is immutable, declare it with `mut` to make it mutable
  4 | user_name := "John"
  5 |
  6 | user_name = "Elena"
    | ~~~~~~~~~
  7 |
  8 | println("Hello " + user_name)
```

## Mutability

Learn more about mutability by reading the [Operator: mut](/operators/mut) page.
