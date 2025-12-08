# if

To create conditional code, use the `if` operator.

```v
module main

fn main() {
  send_notifications := true

  if send_notifications {
    println("Sending notification...")
  }
}
```

## Multi conditions

You can chain various criterias using `else if` statement.

```v
module main

fn main() {
  content_type := "application/json"

  if content_type == "text/plain" {
    println("Hello world")
  } else if content_type == "text/html" {
    println("<p>Hello world</p>")
  } else {
    println('{"content": "Hello world"}')
  }
}
```

## Conditional return

You can create a variable or associate a value using the `if` conditional operator.

```v
module main

fn main() {
  age := 32

  message := if age > 21 {
    "Please enter your vote"
  } else {
    "You cannot vote now."
  }

  println(message)
}
```
