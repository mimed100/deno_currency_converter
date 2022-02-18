import {FiatConverter_fromAPI} from 'https://deno.land/x/currency_converter@v1.0.0/api_mod.ts'

const api_key = "12ed855902ddbea5df116639e8e3a1b2"
var amount = 100
var input_currency = "EUR"
var output_currency = "USD"

let FiatConverter = new FiatConverter_fromAPI()
var result = await FiatConverter.convert(api_key, amount, input_currency, output_currency)
console.log('Result:', result, output_currency)
