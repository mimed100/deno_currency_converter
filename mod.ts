import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'
import { readJson, readJsonSync, writeJson, writeJsonSync} from 'https://deno.land/x/jsonfile/mod.ts'


const data = await Request.get('ENTER YOUR API KEY HERE')
writeJsonSync('.data.json', data)

console.log(typeof data)
console.log(data)
