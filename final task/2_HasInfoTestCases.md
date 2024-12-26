# Test cases for has_info

### **has_info(searchKey)**
Method checks based on number if the computer has `info` or not.

>Parameters:
>>searchKey is the number to be searched

>Returns:
>>Returns true if the computer matching the searchKey has `info` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

>Throws:
>>

## Test 1: Has_Info
Test uses default data

```js
  const register = new ComputerRegister(defaultData);
  register.has_info(2)
```
    

expect
```json
true
```
to be returned


## Test 2: No_Info
Test uses default data

```js
  const register = new ComputerRegister(defaultData);
  register.has_info(5)
```

expect
```json
false
```
to be returned


## Test 3: Missing parameter
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.has_info()
```
expect
```json
false
```
to be returned

## Test 4: Non-existing ID
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.has_info(200)
```
expect
```json
false
```
to be returned

## Test 5: Empty object
Using modified data:

```json
[
      {
        "number": 1,
        "computerName": "Xunil 4.7",
        "processor": "X-Force",
        "price": 25,
        "diskspace": "1 TB",
        "colors": ["blue", "orange", "yellow"],
        "info": {
          "notes": "high quality",
          "model": "chrome",
          "consumption": "D",
        },
      },
      {
        "number": 2,
        "computerName": "GameDelux",
        "processor": "X-Force",
        "price": 10,
        "diskspace": "10 GB",
        "colors": ["red", "white", "green"],
        "info": {},
      },
    ];
```

```js
const register = new ComputerRegister(testData);
register.has_info(2)
```

expect
```json
false
```
to be returned