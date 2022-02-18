import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v1.0.0/json_mod.ts'
import json from 'https://deno.land/x/currency_converter@v1.0.0/data.json' assert { type: 'json' };
console.log(json)

let FiatConverter = new FiatConverter_fromJSON()
var result = await FiatConverter.convert(100, "EUR", "USD")
console.log('Result:', result, " USD")