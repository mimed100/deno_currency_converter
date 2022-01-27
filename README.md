# Currency_converter
Deno module to convert fiat currencies with initial fetched API from fixer.io

## Usage example
There are two different modes for this module

### 1) Convert Currency with Realtime Data from fixer.io (API-Key required: https://fixer.io/)
##### Step 1) Import and create a new class
```js
import {FiatConverter_fromAPI} from 'https://deno.land/x/currency_converter@v0.6.0/api_mod.ts'
let FiatConverter = new FiatConverter_fromAPI()
```

##### Step 2) Call the convert() method on created object
The convert() method receives four inputs:<br /> 
    arg0: Your fixer.io api access key as string<br />
    arg1: A number of amount that should be converted into the target fiat currency<br />
    arg2: The inital currency for conversion ["EUR" -->] (ISO 3-Letter Currency Code) as string!<br />
    arg2: The target currency [--> "USD"] (ISO 3-Letter Currency Code) as string!
```js
var result = await FiatConverter.convert("YOUR_API_ACCESS_KEY",15,"EUR","RUB")
console.log(result)
```

Fixer.io offers 100 free API request calls per month! 
Create your fixer.io API_Key now and calculate currencies in Realtime for free with this deno module!
Link: https://fixer.io/



### 2) Convert Currency with Saved Data from .json file
##### Step 1) Import and create a new class
```js
import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v0.6.0/json_mod.ts'
let FiatConverter = new FiatConverter_fromJSON()
```

##### Step 2) Call the convert() method on created object
The convert() method receives four inputs:<br /> 
    arg0: A number of amount that should be converted into the target fiat currency<br />
    arg1: The inital currency for conversion ["EUR" -->] (ISO 3-Letter Currency Code) as string!<br />
    arg2: The target currency [--> "USD"] (ISO 3-Letter Currency Code) as string!
```js
var result = await FiatConverter.convert(15,"EUR","RUB")
console.log(result)
```


##### Original versioning repository
Link: https://github.com/mimed100/deno_currency_converter
Unfortunetly the free fixer.io api key does not support changing base currency directly by request...

