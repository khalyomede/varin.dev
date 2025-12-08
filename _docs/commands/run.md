# run

## Run your program

Once `v` is installed, given you have the file `main.v` with this content:

```v
module main

fn main() {
  println("Hello world")
}
```

You can run this program using the command `v run <your-v-file>`:

```bash
v run main.v
```

```bash
Hello world
```

## Passing arguments during run

If your program is a command line program, that accepts flags, and you want to run your program with these flags, just pass them after the run command.

If you have a program that accepts a `--verbose` flag (with this content in `main.v`):

```v
module main

import os

fn main() {
  first_argument := os.args[1] or { "" }
  verbose := first_argument == "--verbose"

  if verbose {
    println("Starting...")
  }

  println("Hello world")

  if verbose {
    println("Exiting...")
  }
}
```

Then when running your program, you may pass the `--verbose` flag:

```bash
v run main.v --verbose
```

```bash
Starting...
Hello world
Exiting...
```
