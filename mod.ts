import {Request} from 'https://deno.land/x/request@1.3.2/mod.ts'
import {readJson, readJsonSync, writeJson, writeJsonSync} from 'https://deno.land/x/jsonfile/mod.ts'
import {API} from './src/api.ts'

// Enter your private api access key as string HERE!
//const api_key = new API("")
const api_key = new API("YOUR PRIVATE API KEY COMES HERE!")

console.log("YOUR private API KEY: \n"+api_key.get_api_key());
console.log("###########################################################################");


const data = await Request.get(api_key.get_api_key());
console.log(data);
writeJsonSync('data.json', data)


let object:any = readJsonSync("data.json")
console.log(object.base);



