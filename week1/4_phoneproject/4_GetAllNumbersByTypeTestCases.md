
# Test cases for the getAllNumbersByTypes


### **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of given type is found, an empty array [] is returned. If a person have multiple numbers of given type, each of them will be in it's own object.

If the parameter is missing, throws an exeption `"missing parameter"`.

The format of the returned object is :
```json
{"firstname":"", "lastname":"", "number":{"type":"","tel":""}}
```

#### Example `type` work:

```json
[
   {"firstname":"Leila","lastname":"Hökki",
     "number":{"type":"work", "tel":"987654321"}},
   {"firstname":"Leila","lastname":"Hökki",
     "number":{"type":"work", "tel":"05040302"}},
   {"firstname":"Matt","lastname":"River",
     "number":{"type":"work", "tel":"2468159"}}
]
```

### Test 1: Type:mobile
Test uses the default data

```js
const register = new PhoneRegister(defaultData);
register.getAllNumbersByType("mobile");
```
returns
```json
[
    {"firstname":"Matt","lastname":"River",
     "number":{"type":"mobile", "tel":"0409812345"}}
     ]
```

### Test 2: Type:work
Test uses the default data
```js
const tegister = new PhoneRegister(defaultData);
register.getAllNumbersByType("work");
```
returns
```json
[
   {"firstname":"Leila","lastname":"Hökki",
     "number":{"type":"work", "tel":"987654321"}},
   {"firstname":"Leila","lastname":"Hökki",
     "number":{"type":"work", "tel":"05040302"}},
   {"firstname":"Matt","lastname":"River",
     "number":{"type":"work", "tel":"2468159"}}
]
```

### Test 3: Type:x

```js
const register = new PhoneRegister(defaultData);
regiter.getAllNumbersByType("x");
```

returns []

### Test 4: Missing parameter
Test uses the default data

```js
const tegister = new PhoneRegister(defaultData);
register.getAllNumbersByType();
```

throws an exception `"missing parameter"`

### Test 5: Testing type ""

#### 5.1 Testing with default data
```js
const tegister = new PhoneRegister(defaultData);
regiter.getAllNumbersByType("");
```

returns []

#### 5.2 Testing with modified data
Using modified data

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
```js
const tegister = new PhoneRegister(defaultData); //this should probably be testData in brackets
regiter.getAllNumbersByType("");
```
return
```json
[
      {"firstname":"Leila","lastname": "Hökki",
        "number":{"type":"", "tel": "987654321"}}
      ]
```