### **get_total_price_of_computers_by_processor(searchValue)**
returns the total price of all computers that have the same processor than the given searchValue

>Parameters:
>>searchValue is the processor of the computer to be searched

>Returns:
>>total cumulative price of computers matching the searchValue

>Throws:
>>if no computer with the given searchValue is  found throws an exeption `'nothing found with given searchValue'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

## Test1: Total price of computers with same processor
Test uses default data

```js
 const register = new ComputerRegister(defaultData);
      register.get_total_price_of_computers_by_processor("X-Force")
```

returns

```json
35
```
## Test2: No computer with given searchvalue found
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_total_price_of_computers_by_processor("best processor")
```

throws an exeption `'nothing found with given searchValue'`

## Test3: Missing parameter
Test uses default data

```js
const register = new ComputerRegister(defaultData);
register.get_total_price_of_computers_by_processor()
```

throws an exeption `'missing parameter'`