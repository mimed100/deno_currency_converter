## Usage example
Deno module to convert fiat money currencies with initial fetched API from fixer.io
There are two different modes for this module.

### Mode 1) Convert Currency with Realtime Data from fixer.io (API-Key required: https://fixer.io/)
```js
import {FiatConverter_fromAPI} from 'https://deno.land/x/currency_converter@v0.9.5/api_mod.ts'

const api_key = "12ed855902ddbea5df116639e8e3a1b2"
var amount = 100
var input_currency = "EUR"
var output_currency = "USD"

let FiatConverter = new FiatConverter_fromAPI()
var result = await FiatConverter.convert(api_key, amount, input_currency, output_currency)
console.log('Result:', result, output_currency)
```
#### Test via commandline (provided API-KEY)
```js
deno run --allow-net "https://deno.land/x/currency_converter@v0.9.5/test_api.ts"
```
#### Output
```js
Result: 113.25 "USD"
```
Fixer.io offers 100 free API request calls per month! 
Create your fixer.io API_Key now and calculate currencies in Realtime for free with this deno module!<br />
Link: https://fixer.io/


### Mode 2) Convert Currency with Saved Data from data.json file
#### Step 1) Create a .json file in the same directory where you run the deno module and name it data.json
Link for the data.json file: https://deno.land/x/currency_converter@v0.8.1/data.json
#### Step 2) Import and create a new class
```js
import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v0.9.1/json_mod.ts'
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


## Thank you for the helpful modules that were used in this module!
### https://deno.land/x/request@1.3.2
### https://deno.land/x/math@v1.1.0

