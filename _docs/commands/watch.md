# watch

When you work on a program and have to make many changes, you will have to re-run your program multiple times to ensure it produces the expect output.

To prevent having to re-run `v run main.v` every time, V allows you to automatically watch for changes using `v watch run <your-v-file>`.

Given you have the file `main.v` with this content:

```v
module main

fn main() {
  println("Hello world")
}
```

When you run the command `v watch run main.v`, V will automatically re-interpret your program for you after you save any changes on this file (or any files that the file `main.v` depends on):

```bash
v watch run main.v
```

```bash
2025-12-05 16:33:09.277: "/opt/v/v" run main.v | pid: 24 | reload cycle: 0
Hello world
```

Now change "world" by "guys" in your `main.v` file and see the command automatically re-run your code:

```diff
module main

fn main() {
-  println("Hello world")
+  println("Hello guys")
}
```

```bash
2025-12-05 16:33:09.277: "/opt/v/v" run main.v | pid: 24 | reload cycle: 0
Hello world
2025-12-05 16:34:19.984: "/opt/v/v" run main.v | pid: 38 | reload cycle: 1
Hello guys
```
