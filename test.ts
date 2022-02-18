//import json from 'https://deno.land/x/currency_converter@v0.9.2/data.json' assert { type: 'json' };
//console.log(json)
//console.log(local json data)


import {FiatConverter_fromJSON} from "https://deno.land/x/currency_converter@v0.9.2/json_mod.ts"
let FiatConverter = new FiatConverter_fromJSON()
console.log(await FiatConverter.convert(15,"EUR","RUB"))