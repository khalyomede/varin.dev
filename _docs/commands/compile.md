# compile

## Compile on any OS

Let us assume you have a `main.v` file with this content:

```v
module main

fn main() {
  println("Hello world")
}
```

When you want to produce an executable that you can share or distribute, use the following command:

```bash
v -prod -cflags '-static' main.v
```

This will produce a file with the same name, `main`, that you can run locally:

```bash
./main
```

```bash
Hello world
```

The `-cflags '-static'` option means you generate an executable that can be run in any OS (Linux, Windows, Mac) because it contains everything it needs to be run (no dependencies required).

::: info

You can omit the `-prod` flag to speed up the compilation (useful for quick local tests).

:::

## Compile on a specific OS

If you want to target a single Operating System, or you want to produce different programs for different OS, add the `-os <os>` option.

```bash
v -prod -cflags '-static' -os windows main.v
```

This is useful when you want to create one program per OS, and you need to have different behavior for each OS.

::: warning
For targeting specific OS, the machine you compile from must have the executables required during compilation for the targeted operating system.
:::
