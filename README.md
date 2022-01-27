# Currency_converter
Deno module to convert fiat currencies with initial fetched API from fixer.io

## Usage example
There are two different modes for this module

### 1) Convert Currency with Realtime Data
```js
import {FiatConverter_fromAPI} from 'https://deno.land/x/currency_converter@v0.3.3/api_mod.ts'

let FiatConverter = new FiatConverter_fromAPI()
var result = await FiatConverter.convert("12ed855902ddbea5df116639e8e3a1b2",15,"EUR","RUB")
console.log(result)
```

### 1) Convert Currency with Saved Data from .json file
```js
CODEBLOCK WILL FOLLOW
```

## Get private API key from fixer.io



##### Original versioning repository
Link: https://github.com/mimed100/deno_currency_converter
Unfortunetly the free fixer.io api key does not support changing base currency directly by request...

