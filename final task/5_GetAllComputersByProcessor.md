### **get_All_computers_By_processor(searchValue)**
searches computers with given processor

>Parameters:
>>searchValue is the processor of the computer to be searched

>Returns:
>>Returns an array of computer objects of given processor. If no computer of given processor is found, returns an empty array.

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

## Test1: Find a computer by processor
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_All_computers_By_processor("Selenium II")
```

returns

```json
[
      {
        "number": 3,
        "processor": "Selenium II",
        "price": 200,
        "diskspace": "1 TB",
        "colors": ["green", "blue", "orange"],
        "info": {
          "notes": "high quality",
          "model": "VIP",
          "consumption": "C",
        },
      },
    ]
```

## Test2: Test2: Find all computers with the same processor
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_All_computers_By_processor("X-Force")
```

returns

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
        "info": {
          "notes": "high quality",
          "model": "XXL",
          "consumption": "A+",
        },
      },
    ]
```

## Test3: No computer of given processor found
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_All_computers_By_processor("Not real processor")
```

returns []

## Test4: Missing parameter
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_All_computers_By_processor()
```

throws an exception `"missing parameter"`