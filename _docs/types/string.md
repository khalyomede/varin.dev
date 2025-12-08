# string

Strings allow to store a chain of characters into a single type.

## Concatenation

When you want to combine multiple strings, you can use the add operator `+`.

```v
module main

fn main() {
  first_name := "John"
  last_name := "Doe"

  println("Hello " + first_name + " " + last_name)
}
```

You can also use the short string concatenation operator `${}`.

```v
module main

fn main() {
  first_name := "John"
  last_name := "Doe"

  println("Hello ${first_name} ${last_name}")
}
```

## Methods

Strings have built-in methods. Please refer to these resources:

- Built-in string methods [Github repository](https://github.com/vlang/v/blob/master/vlib/builtin/string.v)
- [Strings helpers module](https://modules.vlang.io/strings.html) documentation
