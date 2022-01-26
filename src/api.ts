import {Request} from 'https://deno.land/x/request@1.3.2/mod.ts'
import {readJson, readJsonSync, writeJson, writeJsonSync} from 'https://deno.land/x/jsonfile/mod.ts'

class API {
    api_key:string;
    data:any;
    constructor(access_key: string) {
        this.api_key = "http://data.fixer.io/api/latest?access_key="+access_key;
        this.data = this.get_data()
        console.log(this.data)
    }
    // Suuupiiiii
    async get_data(){
        this.data = await readJsonSync("./data.json");
        
        // Klappt
        console.log(this.data.rates["USD"]);
        console.log(typeof this.data.rates["USD"]);
        return this.data
        //const data_new = data.rates;
        //console.log(data_new);
    }
    get_api_key() {
        return this.api_key
    }
    get_convert(quantity:number, curr_from:string, curr_to:string) {
        console.log(this.data)
        //var curr_from_value = this.data.rates[curr_from]
        //var curr_to_value = this.data.rates[curr_to]
        //return [quantity, curr_from_value, curr_to_value]
        
    }
}
const api_key = new API("YOUR PRIVATE API KEY COMES HERE!")

console.log(api_key.get_convert(20, "USD", "EUR"))


const result:any = await readJsonSync("./data.json");
console.log(result.rates["EUR"]);







// Enter your private api access key as string HERE!
//const api_key = new API("")
//const api_key = new API("YOUR PRIVATE API KEY COMES HERE!")
//console.log("YOUR private API KEY: \n"+api_key.get_api_key());
//console.log("###########################################################################");
//const data = await Request.get(api_key.get_api_key());
//console.log(data);
//writeJsonSync('data.json', data)


//console.log(api_key.get_data())


