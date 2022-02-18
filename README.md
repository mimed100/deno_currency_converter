## Usage example
Deno module to convert fiat money currencies with initial fetched API from fixer.io
There are two different modes for this module.

### Mode 1) Convert Currency with Realtime Data from fixer.io (API-Key required: https://fixer.io/)
```js
import {FiatConverter_fromAPI} from 'https://deno.land/x/currency_converter@v1.1.0/api_mod.ts'
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
deno run --allow-net "https://deno.land/x/currency_converter@v1.1.0/test_api.ts"
```
#### Output
```js
Result: 113.25 "USD"
```
Fixer.io offers 100 free API request calls per month! 
Create your fixer.io API_Key now and calculate currencies in Realtime for free with this deno module!<br />
Link: https://fixer.io/


### Mode 2) Convert Currency with copied data from data.json file
```js
// Copy the JSON file into current directory, this file will be used for the currency conversion
import json from 'https://deno.land/x/currency_converter@v1.1.0/data.json' assert { type: 'json' };
const write = Deno.writeTextFile("./data.json", JSON.stringify(json))
write.then(() => console.log("File written to ./data.json"));

import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v1.1.0/json_mod.ts'
var amount = 100
var input_currency = "EUR"
var output_currency = "USD"

let FiatConverter = new FiatConverter_fromJSON()
var result = await FiatConverter.convert(amount, input_currency, output_currency)
console.log("Result ", result, output_currency)
```

#### Test via commandline (provided API-KEY)
```js
deno run --allow-net --allow-write --allow-read "https://deno.land/x/currency_converter@v1.1.0/test_json.ts"
```
#### Output
```js
Result: 112.38 "USD"
```


## Thank you for the helpful modules that were used in this module!
### https://deno.land/x/request@1.3.2
### https://deno.land/x/math@v1.1.0

