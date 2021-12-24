# Blackjack-game

### === vs ==

``` javascript
100 == "100" // returns true

100 === "100" // returns false
```

### querySelector
Dynamic method
we need to be specific for the type of value we are passing inside

unlike `getElementById` we are not specifying that we are looking for an id hence we need to tell it that it's an id using `#sum-el`

query = question
Selector = CSS selectors

``` javascript
let sumEl = document.querySelector("#sum-el") // for an id selector
let sumEl = document.querySelector(".sum-el") // for an class selector
let sumEl = document.querySelector("body") // for the whole element
```

### Arrays
Known as composite / complex data type

primitive vs composite data types

Primitive data types
- string
- number
- boolean
Lego blocks

Composite data type
- Array
Full Lego model using Lego blocks

### Array methods

methods are functions on an object

- Appending an item at the end of an array `push()`
- Removing the last item from an array `pop()`

### for loops

``` javascript
//   START     FINISH   STEP SIZE
for (let i = 1; i < 11; i += 1) {
  console.log(i)
}
```

``` javascript
let messages = [
    "a",
    "b",
    "c"
]

for (let i = 0; i < messages.length; i += 1) {
  console.log(messages[i])
}
```
