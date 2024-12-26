# Dice API

This is Dice class for dice games. Dice holds the number of dots. The number of dots is between 1 and given upper bound (included). Maximum upper boud is 20. The minimum upper bound is 2

if the dice hasn't been rolled the number of dots is 0. After the dice has been rolled, the dot count can't become zero again.

## Operations

### **constructo(upperBound)**

- initializes the dice with upper bound that is passed as a parameter
- if no upper bound is given, the default upper bound will be 6
- initializes the dot count to 0

- if the upperbound is not a number and not an integer, trow an exeption
`"upper bound must be an integer"`.

- if the upper bound is not between 2 and 20, an exception is thrown:
    - upperbound >20:`"upper bound too big"`
    - upperbound <2:`"upper bound too small"`

## Methods

### **Roll**

- rolls the dice
- when rolled, the dot count will become a random number between 1 and the upper bound
- returns nothing

### **toString**

- returns dot count as text. For example:`"4"`
- if the dice hasn't been rolled yet, returns the text `"not rolled yet"`

## Getters

### **dots**
- returns the number of dots (dot count)

### **minimumValue**
- returns the minimum number of dots. It should be 1.

### **maximumvalue**
- returns the upper bound of the dice.