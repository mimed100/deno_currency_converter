// Copy the JSON file into current directory, this file will be used for the currency conversion
import json from 'https://deno.land/x/currency_converter@v1.0.0/data.json' assert { type: 'json' };
const write = Deno.writeTextFile("./data.json", JSON.stringify(json))
write.then(() => console.log("File written to ./data.json"));


import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v1.0.0/json_mod.ts'

var amount = 100
var input_currency = "EUR"
var output_currency = "USD"

let FiatConverter = new FiatConverter_fromJSON()
var result = await FiatConverter.convert(amount, input_currency, output_currency)
console.log("Result ", result, output_currency)