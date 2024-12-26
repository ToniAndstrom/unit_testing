# Test cases for the getPersonsNumbersByType

## **getPersonsNumbersByType(fistname, lastname, type)**

Method returns an array of phone numbers of given `type` belonging to given person with `firstname` and `lastname`.

for example Leila Hökki and work returns
```json
[ "987654321", "05040302"]
```

and Matt River and mobile returns
```json
["0409812345"]
```

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
If at least one parameter is missing, an exception `"missing parameter` is thrown.

### Test 1: Leila Hökki and work
Test uses the default data

```js
const register = new PhoneRegister(defaultData);
getPersonsNumbersByType("Leila", "Hökki", "work");
```
expect
```json
[ "987654321", "05040302"]
```
to be returned.


### Test2: Matt Rivert and mobile
Test uses default data
```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType("Matt", "River", "mobile")
```

expect
```json
["0409812345"]
```
to be returned


### Test 3: Wrong name of type
Test uses the default data

test with values
#### 3.1 firstname Matt, lastname x, type mobile
```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType("Matt","x", "mobile")
```
#### 3.2 firstname x, lastname River, type mobile
```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType("x", "River","mobile")
```
#### 3.3 firstname Matt, lastname River, type x
```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType("Matt", "River", "x")
```

returns []


### Test 4: parameter missing
Test uses the default data

#### 4.1 one parameter missing: `Matt`,`River`
```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType("Matt", "River")
```
#### 4.2 two parameters missing: `Matt`
```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType("Matt")
```
#### 4.3All parameters missing:
```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType()
```
expect to throw an exception `"missing parameter`


### Test 5: Empty string as type
Using modified data:

```json
[
    {
        "firstname":"Leila",
        "lastname": "Hökki",
        "phones": [
            {"type":  "home", "number": "123456789"},
            {"type":  "", "number": "987654321"},
            {"type":  "work", "number": "05040302"},
            
        ]
    },
    {
        "firstname":"Matt",
        "lastname": "River",
        "phones": [
            {"type":  "home", "number": "56743290"},
            {"type":  "mobile", "number": "0409812345"},
            {"type":  "work", "number": "2468159"},
            
        ]
    }
]
```

#### Get Leila Hökki ""
expect this to return
```json
["987654321"]
```