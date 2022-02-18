/*
import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v1.0.0/json_mod.ts'
import json from 'https://deno.land/x/currency_converter@v1.0.0/data.json' assert { type: 'json' };
console.log(json)

let FiatConverter = new FiatConverter_fromJSON()
var result = await FiatConverter.convert(100, "EUR", "USD")
console.log('Result:', result, " USD")
*/

// Copy the Json file into current directory
import json from 'https://deno.land/x/currency_converter@v1.0.0/data.json' assert { type: 'json' };
const write = Deno.writeTextFile("./data.json", JSON.stringify(json))
write.then(() => console.log("File written to ./data.json"));


import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v1.0.0/json_mod.ts'
let FiatConverter = new FiatConverter_fromJSON()
var result = await FiatConverter.convert(15,"EUR","RUB")
console.log(result)