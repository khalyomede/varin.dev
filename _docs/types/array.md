# array

Arrays store a list of items of the same type.

```v
module main

fn main() {
  domains := ["docs.vlang.io", "play.vlang.io", "modules.vlang.io"]
}
```

## Array type

As mentioned above, an array store the same type of item for all its values. V will infer the type of the array using the type of the first item.

```v
module main

fn main() {
  local_address := [u8(192), u8(168), u8(0), u8(1)]
}
```

You do not have to repeat the same type for all items. The example above can be simplified like this:

```v
module main

fn main() {
  local_address := [u8(192), 168, 0, 1]
}
```

## Number of items

Use the `len` property to get the number of items in the array.

```v
module main

fn main() {
  languages := ["v", "node.js", "haskell"]

  assert languages.len == 3
}
```

## Array indices

Each items in an array have assigned indices, starting from 0.

```v
module main

fn main() {
  administrators := ["marc@vlang.io", "stanislas@vlang.io"]

  assert administrators[0] or { "" } == "marc@vlang.io"
  assert administrators[1] or { "" } == "stanislas@vlang.io"
}
```

## Safe array access

You should use the [`or`](../operators/or) operator to prevent accessing an array item using an index that may not exist.

```v
module main

fn main() {
  top_level_domains := ["com", "io", "app"]

  fourth_domain := top_level_domains[3] or { "unknown" }
}
```

## Push an item

You can push an item at the end of an array using the `<<` operator in a mutable array.

```v
module main

fn main() {
  mut units := ["hours", "minutes", "seconds"]

  units << "milliseconds"

  assert units == ["hours", "minutes", "seconds", "milliseconds"]
}
```

Learn more on mutability in the [mut](../operators/mut) operator documentation.

## Array type initialization

You can declare the type of an array before adding values to it.

```v
module main

fn main() {
  mut completed_tasks := []string{}

  completed_steps << "image compressed"
}
```

## Multi-dimensional type initialization

You can declare multi-dimensional array types.

```v
module main

fn main() {
  mut routes := [][]string{}

  routes[] << [
    "/"
    "/contact-us"
  ]

  routes[] << [
    "/login"
    "/contact-message"
  ]

  assert routes == [["/", "/contact-us"], ["/login", "/contact-message"]]
}
```

## Short array initialization

You can initialize an array with pre-defined values. In this case, you must specify its length using the `len` property.

```v
module main

fn main() {
  grades := []u8{len: 5, init: 1}

  assert grades == [1, 1, 1, 1, 1]
}
```

You have access to a special value `index` to create dynamic values during initialization.

```v
module main

fn main() {
  grades := []u8{len: 5, init: index}

  assert grades := [0, 1, 2, 3, 4]
}
```

You can perform as many arithmethic as you want during initialization.

```v
module main

fn main() {
  even_numbers := []u8{len: 5, init: index * index}

  assert even_numbers := [0, 2, 4, 6, 8]
}
```

## Fixed size arrays

When you know how many items will live in an array, and you know for sure there will be no more or less than this number of items, use a fixed size array.

Use the `!` operator to ensure the array is of the exact desired size.

```v
module main

fn main() {
  local_address := [u8(192), 168, 0, 1]!
}
```

Fixed size array items can also be modified. Just declare it as mutable.

```v
module main

fn main() {
	mut ip_address := [u8(192), 168, 0, 1]

  ip_address[2] = 1

  assert ip_address == [u8(192), 168, 1, 1]
}
```

## Fixed array max length

You can set the number of items the array can hold at its maximum using the `len` property.

```v
module main

fn main() {
  mut selected_domains := []string{len: 3}

  selected_domains << "com"
  selected_domains << "io"
  selected_domains << "app"
}
```

::: danger
If you try to allocate more items than the specified array length, your program will [`panic`](../functions/panic).
:::

## Pre-allocated memory

By default arrays are allocating a certain length in memory. The length is determined at intialization.

```v
module main

fn main() {
  mut administrators := ["jack@example.com", "bob@example.com"]

  assert administrators.cap == 2
}
```

This means if you add another value to this array, the program will need to re-allocate another space in memory by copying the array to a new memory space.

```v
module main

fn main() {
  mut administrators := ["jack@example.com", "bob@example.com"]

  administrators << "alice@example.com" // New memory allocation
}
```

As memory re-allocation takes up computational time, you may want to determine your own capacity using the `cap` property. Use it when you want to improve the performance of your program and you know how many items at maximum the array may support.

```v
module main

fn main() {
  mut administrators := []string{cap: 3}

  administrators << "jack@example.com"
  administrators << "bob@example.com"
  administrators << "alice@example.com"
  administrators << "theresa@example.com" // New allocation was needed
}
```

## Methods

Arrays have built-in methods. Check the official [array module documentation](https://modules.vlang.io/builtin.html#array) for more information.
