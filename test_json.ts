/*
import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v1.0.0/json_mod.ts'
import json from 'https://deno.land/x/currency_converter@v1.0.0/data.json' assert { type: 'json' };
console.log(json)

let FiatConverter = new FiatConverter_fromJSON()
var result = await FiatConverter.convert(100, "EUR", "USD")
console.log('Result:', result, " USD")
*/

import json from 'https://deno.land/x/currency_converter@v1.0.0/data.json' assert { type: 'json' };
console.log(json)

const write = Deno.writeTextFile("./TEST.json", JSON.stringify(json))
write.then(() => console.log("File written to ./data.json"));