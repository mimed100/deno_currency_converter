import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v0.9.3/json_mod.ts'
import json from 'https://deno.land/x/currency_converter@v0.9.3/data.json' assert { type: 'json' };
console.log(json)

let FiatConverter = new FiatConverter_fromJSON()
var result = await FiatConverter.convert(100, "EUR", "USD")
console.log('Result:', result, " USD")