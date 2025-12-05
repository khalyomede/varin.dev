# 3. Run V

## Using the official installer

You can follow the [official documentation](https://docs.vlang.io/installing-v-from-source.html) to install the `v` executable on your machine.

After following these instructions, ensure your installation works properly by running this command:

```v
v --version
```

```bash
V 0.4.12 d9e962f
```

## Using Docker Compose

If you are used to use Docker, you can copy this into a `docker-compose.yml` file to get up and running quickly:

```yml
services:
  v:
    image: khalyomede/vlang:latest-alpine
    entrypoint: v
    user: root
    working_dir: /root/app
    volumes:
      - .:/root/app
```

Then in your terminal ensure `v` is working:

```bash
docker compose run --rm v --version
```

```bash
V 0.4.12 d9e962f
```

If you use Bash (Linux), you can copy these aliases under `~/.bash_aliases` to simply run `v` instead of `docker compose run --rm v`

```bash
alias v="docker compose run --rm v"
```

Then ensure `v` works properly:

```bash
source ~/.bash_aliases
```

```bash
v --version
```

```bash
V 0.4.12 d9e962f
```

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
