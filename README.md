# deno_currency_converter
Deno module to convert fiat money currencies with initial fetched API from fixer.io

## Usage example
There are two different modes for this module.

### Mode 1) Convert Currency with Realtime Data from fixer.io (API-Key required: https://fixer.io/)
#### Step 1) Import and create a new class
```js
import {FiatConverter_fromAPI} from 'https://deno.land/x/currency_converter@v0.9.0/api_mod.ts'
let FiatConverter = new FiatConverter_fromAPI()
```
#### Step 2) Call the convert() method on created object
The convert() method receives four inputs:<br /> 
    arg0: Your fixer.io api access key as string<br />
    arg1: A number of amount that should be converted into the target fiat currency<br />
    arg2: The inital currency for conversion ["EUR" -->] (ISO 3-Letter Currency Code) as string!<br />
    arg2: The target currency [--> "USD"] (ISO 3-Letter Currency Code) as string!
```js
var result = await FiatConverter.convert("YOUR_API_ACCESS_KEY",15,"EUR","RUB")
console.log(result)
```
#### Step 3) Run the module
```js
deno run --allow-net
```

Fixer.io offers 100 free API request calls per month! 
Create your fixer.io API_Key now and calculate currencies in Realtime for free with this deno module!<br />
Link: https://fixer.io/



### Mode 2) Convert Currency with Saved Data from data.json file
#### Step 1) Create a .json file in the same directory where you run the deno module and name it data.json
Link for the data.json file: https://deno.land/x/currency_converter@v0.8.1/data.json
#### Step 2) Import and create a new class
```js
import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v0.9.0/json_mod.ts'
let FiatConverter = new FiatConverter_fromJSON()
```
#### Step 3) Call the convert() method on created object
The convert() method receives four inputs:<br /> 
    arg0: A number of amount that should be converted into the target fiat currency<br />
    arg1: The inital currency for conversion ["EUR" -->] (ISO 3-Letter Currency Code) as string!<br />
    arg2: The target currency [--> "USD"] (ISO 3-Letter Currency Code) as string!
```js
var result = await FiatConverter.convert(15,"EUR","RUB")
console.log(result)
```
#### Step 4) Run the module
```js
deno run --allow-read
```
