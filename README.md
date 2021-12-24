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
