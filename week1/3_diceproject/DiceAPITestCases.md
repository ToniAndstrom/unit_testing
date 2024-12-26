# Dice API

## test cases for the constructor **constructor**

1.\_Create a dice with no upper bound given initialzes a dice with minimum 1 and maximumValue 6 and dot count 0

- maximumValue 6
- minimumValue 1
- dots 0

2. Create a dice with upperbounds 2-20

expect:

- maximumValue upper bound
- minimumValue 1
- dots 0

3. Test the exceptions
   Create a dice with upper bound:

   - "a" throws `"upper bound must be an integer"`
   - "1" throws `"upper bound must be an integer"`
   - 2.5 throws `"upper bound must be an integer"`
   - null throws `"upper bound must be an integer"`
   - true throws `"upper bound must be an integer"`
   - false throws `"upper bound must be an integer"`
   - 1 throws `"upper bound too small"`
   - 0 throws `"upper bound too small"`
   - -1 throws `"upper bound too small"`
   - 21 throws `"upper bound too big"`

   ## test cases for roll

   1.Create a dice with no upper bound given
   roll the dice
   expect:
   dots to be <=6
   and dots >=1

   (this should be repeated multiple times. To be checked later)

   2.Create a dice with upper bound 2...20
   roll the dice
   expect:
   dots to be <=upper bound
   dots >=1

   (this should be repeated multiple times. To be checked later)

   ## Test cases for the toString

   testing not rolled and rolled
   In both cases create a new dice (no upper bound given)

   1. roll the dice
      expect to return dot count as text. Compare it with dots casteed as string
   2. not rolled
      expect to return `"not rolled yet"`


## test cases for roll version 2
roll the dice multiple times (100-1000 rounds?)
absolute minimum is the upper bound ( maybe 10*upperbound would be enough)

how can we be certain that we get all numbers from 1 to the upperbound.

we'll gather the numbers (in an array) and check that eve ry number exists at least once.