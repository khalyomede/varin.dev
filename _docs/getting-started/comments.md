# Comments

You can write help texts that will not be interpreted and may help describe your code intent.

## Single line comments

Comments that hold in a single line can be written using `//`:

```v{3}
module main

// This programs prints a greeting message.
fn main() {
  println("Hello world")
}
```

## Multi-line comments

Comments that take up multiple lines can be started with `/*` and ended with `*/`:

```v{3-6}
module main

/*
  This programs prints a greet message.
  Run it using ./main
*/
fn main() {
  println("Hello world")
}
```
