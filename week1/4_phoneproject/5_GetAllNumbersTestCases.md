# Test cases for the getAllNumbers()

## **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If the person doesn't have a phone (the phones field is an empty array), then the person is not added into the result array.

If all persons are missing, an empty array is returned

### Test 1: testing with default data

Test uses default data

returns the same array that was used to create the register.

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "123456789" },
      { "type": "work", "number": "987654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": "56743290" },
      { "type": "mobile", "number": "0409812345" },
      { "type": "work", "number": "2468159" }
    ]
  }
]
```

### Test 2: some phones are missing

using modified testData

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "123456789" },
      { "type": "work", "number": "987654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "123456789" },
      { "type": "work", "number": "987654321" },
      { "type": "work", "number": "05040302" }
    ]
  }
]
```

### Test 3: first and third person missing phones

using modified test data

```json
[
  { "firstname": "Mary", "lastname": "Jones", "phones": [] },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "123456789" },
      { "type": "work", "number": "987654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  },
  {
    "firstname": "Amanda",
    "lastname": "Brown",
    "phones": [{ "type": "home", "number": "22223333" }]
  }
]
```

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "123456789" },
      { "type": "work", "number": "987654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Amanda",
    "lastname": "Brown",
    "phones": [{ "type": "home", "number": "22223333" }]
  }
]
```

## Test 4: All phones are missing

sing modified test data

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

returns an empty array []

### Test 5: All persons missing

Testdata is an empty array[]
returns []
