Toni Andström


# **End assignment** (computer)


## Task: Create and test ComputerRegister class
Create a class `ComputerRegister` for computer data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage. You may need to modify the data or add more versions for testing. 

### datastorage.json

```json
[
  {
    "number": 1,
    "computerName": "Xunil 4.7",
    "processor": "X-Force",
    "price": 25,
    "diskspace": "1 TB",
    "colors": [
      "blue",
      "orange",
      "yellow"
    ],
    "info": {
      "notes": "high quality",
      "model": "chrome",
      "consumption": "D"
    }
  },
  {
    "number": 2,
    "computerName": "GameDelux",
    "processor": "X-Force",
    "price": 10,
    "diskspace": "10 GB",
    "colors": [
      "red",
      "white",
      "green"
    ],
    "info": {
      "notes": "high quality",
      "model": "XXL",
      "consumption": "A+"
    }
  },
  {
    "number": 3,
    "processor": "Selenium II",
    "price": 200,
    "diskspace": "1 TB",
    "colors": [
      "green",
      "blue",
      "orange"
    ],
    "info": {
      "notes": "high quality",
      "model": "VIP",
      "consumption": "C"
    }
  },
  {
    "number": 4,
    "processor": "Brain 456",
    "price": 10,
    "diskspace": "2 TB",
    "colors": [
      "white",
      "orange",
      "yellow"
    ],
    "info": {
      "notes": "-",
      "model": "XXL",
      "consumption": "E"
    }
  },
  {
    "number": 5,
    "processor": "MotorOlè",
    "price": 25,
    "diskspace": "500 GB",
    "colors": [
      "green",
      "black",
      "white"
    ]
  }
]
```


# ComputerRegister API

## Constructor

### **constructor(jsondata)**
Initializes ComputerRegister object

>Parameters:
>>The data storage json object is passed as a parameter to the constructor.

>Returns:
>>

>Throws:
>>If the parameter is missing, constructor throws an error `'data storage missing'`


## Methods


### **has_info(searchKey)**
Method checks based on number if the computer has `info` or not.

>Parameters:
>>searchKey is the number to be searched

>Returns:
>>Returns true if the computer matching the searchKey has `info` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

>Throws:
>>

### **get_a_computer_matching_number(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique.

>Parameters:
>>searchKey is the primary key number of the computer

>Returns:
>>returns the computer object matching the number or null if there is no match

>Throws:
>>if parameter searchKey is missing, throws an exception `'missing parameter'`

### **get_computer_colors(searchKey)**
Returns an array of computer colors. If none found, returns an empty array.

>Parameters:
>>searchKey is the number of the computer

>Returns:
>>colors of the computer as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

>Throws:
>>

### **get_All_computers_By_processor(searchValue)**
searches computers with given processor

>Parameters:
>>searchValue is the processor of the computer to be searched

>Returns:
>>Returns an array of computer objects of given processor. If no computer of given processor is found, returns an empty array.

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_total_price_of_computers_by_processor(searchValue)**
returns the total price of all computers that have the same processor than the given searchValue

>Parameters:
>>searchValue is the processor of the computer to be searched

>Returns:
>>total cumulative price of computers matching the searchValue

>Throws:
>>if no computer with the given searchValue is  found throws an exeption `'nothing found with given searchValue'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

# The project

## Create a folder for the testproject
- the name of the folder should be `Andström_Toni_computer`
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder `__tests__` for tests
- edit the test script in the **package.json**
- use **datastorage.json** as a data source

## Design test cases in separate .md -file
## Implement all tests and test them to fail
## Implement corresponding methods
## Test the project until all tests pass

## Submit the project folder
Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file