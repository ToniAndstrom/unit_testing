### **get_a_computer_matching_number(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique.

>Parameters:
>>searchKey is the primary key number of the computer

>Returns:
>>returns the computer object matching the number or null if there is no match

>Throws:
>>if parameter searchKey is missing, throws an exception `'missing parameter'`

## Test1: Finds a matching number
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_a_computer_matching_number(2)
```
    
    returns

    ```json

    {
      "number": 2,
      "computerName": "GameDelux",
      "processor": "X-Force",
      "price": 10,
      "diskspace": "10 GB",
      "colors": ["red", "white", "green"],
      "info": {
        "notes": "high quality",
        "model": "XXL",
        "consumption": "A+",
      },
    };
```

## Test2: Doesn't find a matching number
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_a_computer_matching_number(7)
```

reuturns
```json
null
```

## Test3: Missing parameter
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_a_computer_matching_number()
```

throws an exception `"missing parameter"`