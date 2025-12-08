# fmt

Your editor should be configured to use **tabs** for indentation, with each tabs having the same length as 4 spaces.

Here is a `.editorconfig` file to use for your V programs:

```ini
root = true

[*.v]
charset = utf-8
end_of_line = lf
indent_style = tabs
indent_style = 4
insert_final_newline = true
trim_trailing_whitespace = true
```

- [`editorconfig`](https://editorconfig.org/) documentation

Most modern Code Editors (like VSCode, ...) will follow these rules if you create a file named `.editorconfig` at the root of your project.

At any given time, you can automatically re-format your files using the following command:

```bash
v fmt
```

- [`v fmt`](https://docs.vlang.io/tools.html#v-fmt) documentation

This will scan all your `*.v` files and format them automatically.
