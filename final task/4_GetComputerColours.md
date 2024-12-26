### **get_computer_colors(searchKey)**
Returns an array of computer colors. If none found, returns an empty array.

>Parameters:
>>searchKey is the number of the computer

>Returns:
>>colors of the computer as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

>Throws:
>>

## Test1: Finds colors array
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_computer_colors(2)
```

return
```json
["red", "white", "green"]
```
 

## Test2: No computer with id found
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_computer_colors(200)
```

returns []

## Test3: Empty array
Using modified data

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
        "colors": [],
        "info": {
          "notes": "high quality",
          "model": "XXL",
          "consumption": "A+",
        },
      },
    ];
```

```js
const register = new ComputerRegister(testData);
register.get_computer_colors(2)
```

returns []

## Test4: Missing parameter
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_computer_colors()
```

returns []