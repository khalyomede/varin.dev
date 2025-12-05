# Reading big files

## Classic approach

When opening a big file to perform any process on it, like reading a big CSV report, the virtual memory will be consumed by the same amount of bytes as the file weights.

As the virtual memory of the server that host your V program are limited, and given your server may serve multiple client requesting to open heavy files at the same time, you risk to encounter out of memory errors causing your server to shut down.

```v
module main

import os { read_file }

fn main() {
  payments := read_file("payments.jsonl")!

  // ...
}
```

- [`read_file`](https://modules.vlang.io/os.html#read_file) documentation

In this example, if the file weights 2 Gb, your server will have to consume 2 Gb of virtual memory.

If another client reads the file at the same time, or if the server is busy using this memory for another work (like reading SQL rows or performing backups), this will put your server at risk of an unexpected shutdown.

## Buffered / chunked approach

Rather than reading the file in its entirety, you should read line by line instead.

Reading line by line offer the advantage of consuming only the necessary amount of bytes to hold a single line.

If you read a file that weights 2 Gb which contains payments informations on each line, and each lines weight 48 bytes, your server will only consume 48 bytes at the maximum, instead of 2 Gb.

This dramatically reduces the chances your server shuts down because of lack of virtual memory. This also allows your server to serve more clients since it is able to process big files in chunks.

```v
module main

import io { new_buffered_reader }
import os { open_file }

fn main() {
  file := open_file("payments.jsonl")
  payments := new_buffered_reader(reader: file)

  for {
    payment := payments.read_line() or {
      break
    }

    // ...
  }
}
```

- [`new_buffered_reader`](https://modules.vlang.io/io.html#new_buffered_reader) documentation
- [`open_file`](https://modules.vlang.io/os.html#open_file) documentation

The drawback of using a buffered approach is your program takes more time because it has to open and buffer a stream for each new lines.
