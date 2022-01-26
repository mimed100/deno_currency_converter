import {Request} from 'https://deno.land/x/request@1.3.2/mod.ts'
//import {readJson, readJsonSync, writeJson, writeJsonSync} from 'https://deno.land/x/jsonfile/mod.ts'
import loadJsonFile from 'https://deno.land/x/load_json_file@v1.0.0/mod.ts'


class ExchangeData {
    api_key:string;
    exData:any;

    constructor(access_key: string) {
        this.api_key = "http://data.fixer.io/api/latest?access_key=123456789"
    }

    async get_data(){
        this.exData = await loadJsonFile("./data.json");
    }

    get_convert(quantity:number, curr_from:string, curr_to:string) {
        return this.get_data().then(()=>{
            return this.exData.rates[curr_to]})
    }

}
const data = new ExchangeData("123456789")
console.log(data.get_convert(20, "USD", "EUR"))






//const result:any = await readJsonSync("./data.json");
//console.log(result.rates["EUR"]);
// Enter your private api access key as string HERE!
//const api_key = new API("")
//const api_key = new API("YOUR PRIVATE API KEY COMES HERE!")
//console.log("YOUR private API KEY: \n"+api_key.get_api_key());
//console.log("###########################################################################");
//const data = await Request.get(api_key.get_api_key());
//console.log(data);
//writeJsonSync('data.json', data)


//console.log(api_key.get_data())


