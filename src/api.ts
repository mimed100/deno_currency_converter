import {Request} from 'https://deno.land/x/request@1.3.2/mod.ts'
import loadJsonFile from 'https://deno.land/x/load_json_file@v1.0.0/mod.ts'
import { round } from "https://deno.land/x/math@v1.1.0/mod.ts";
import {API_KEY} from './api_key.ts'

class ExchangeData {
    req_api_key:string;
    exData:any;

    constructor(api_access_key: string) {
        console.log("###########################################################################");
        this.req_api_key = "YOUR PRIVATE API ACCESS KEY FOR API REQUEST: http://data.fixer.io/api/latest?access_key="+api_access_key
        console.log(this.req_api_key)
        console.log("###########################################################################");
    }

    async get_data(){
        this.exData = await loadJsonFile("./src/data.json");
    }

    async get_convert(quantity:number, curr_from:string, curr_to:string) {
        return this.get_data().then(()=>{
            return round(quantity*(1/this.exData.rates[curr_from])*this.exData.rates[curr_to], 2)})
    }

}
// ENTER THE PERSONAL ACCESS KEY DIRECTLY HERE
//const data = new ExchangeData("928d9df316f02c8475d137a189d97112")

const api_key = new API_KEY("928d9df316f02c8475d137a189d97112")
//console.log(api_key);




//const data = await Request.get('ENTER YOUR API KEY HERE')





//console.log("Result: "+ await data.get_convert(1, "GBP", "UYU"))
//console.log(data)
//console.log(data.exData.timestamp)



//writeJsonSync('data.json', data)



