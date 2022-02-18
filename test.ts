import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v0.9.1/json_mod.ts'
let FiatConverter = new FiatConverter_fromJSON()
console.log(await FiatConverter.convert(15,"EUR","USD"))