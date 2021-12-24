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

### function declarations

function gets hoisted to the top

### Math object

`Math.floor()`
>>> Removes the decimals

ex.
``` javascript
Math.floor(3.1415) // 3
```

`Math.random()`
>>> Generates a random number between 0 and 1 (not including 1) 0.000 -> 0.999

It's not TRULY random

``` Javascript
// min (included) and max (excluded)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// min (included) and max (included)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
```
