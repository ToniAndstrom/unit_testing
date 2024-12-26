# Test cases for the getName

### **getName(number)**

The method searches the given phone number from the registry. If the number is found, method returns the owner of that number as an object:

```json
{"firstname":"", "lastname":""}
```

If no phone with given numbers if found, the method returns `null`.
If the parameter is missing, `null` is also returned.

All tests are using the default data.

#### Test 1:Leila Hökki home number "123456789"
```js
const register = new PhoneRegister(defaultData);
register.getName("123456789");
```

returns
```json
{"firstname":"Leila", "lastname": "Hökki"}
```

### Test 2: Matt River work number "2468159"

returns
```json
{"firstname":"Matt", "lastname": "River"}
```

### Test 1 and 2 combined
```js
const testValues=[
["1234567", {"firstname":"Leila","lastname":"Hökki" }]
["2468159", {"firstname":"Matt","lastname":"River" }]
]
```

### Test 3: wrong number (non existing number)
call with number "0000"
returns `null`

### Test 4: missing parameter
returns `null`