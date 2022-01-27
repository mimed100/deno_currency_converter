import {FiatConverter_fromJSON} from './src/convert_fromJSON.ts'

let FiatConverter = new FiatConverter_fromJSON()
var x = await FiatConverter.convert(155, "EUR", "USD")
console.log(x);
