# Test cases fro the getTypes

### **getTypes()**

returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned. Type or number may be an empty string. Type may not be null or undefined

For example:

```json
["home", "work", "mobile"]
```

## Test 1: getTypes from the default data from phones.json

Create register with default data.

```js
const register = new PhoneRegister(defaultData);
register.getTypes();
```

returns

```json
["home", "work", "mobile"]
```

## Test 2: No persons

create register with an empty array

```js
const register = new PhoneRegister([];)
register.getTypes();
```

returns an empty array [].

## Test 3: persons have no phones

Test data:

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

Create register with test data

```js
const register = new PhoneRegister(TestData);
register.getTypes();
```

returns an empty array [].

## Test 4. Only work numbers

Test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phone": [
      { "type": "work", "number": "987654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phone": [{ "type": "work", "number": "2468159" }]
  }
]
```

returns

```json
["work"]
```

## Test 5: three persons, four types

test data:

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
    "firstname": "Mary",
    "lastname": "Jones",
    "phones": [{ "type": "cottage", "number": "091238456" }]
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

returns

```json
["home", "work", "cottage", "mobile"]
```

## Test 6: getType with empty type

test data

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "123456789" },
      { "type": "", "number": "987654321" },
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

returns

```json
["home", "", "work", "mobile"]
```

## Test7: all types are empty strings

test data

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "", "number": "123456789" },
      { "type": "", "number": "987654321" },
      { "type": "", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      { "type": "", "number": "56743290" },
      { "type": "", "number": "0409812345" },
      { "type": "", "number": "2468159" }
    ]
  }
]
```

returns

```json
[""]
```
