import {Request} from 'https://deno.land/x/request@1.3.2/mod.ts'
import {round} from "https://deno.land/x/math@v1.1.0/mod.ts";

export class FiatConverter_fromAPI {
    api_access_key: any;
    data:any;
    async get_access_key(input_access_key:string) {
        this.api_access_key = "http://data.fixer.io/api/latest?access_key="+input_access_key;
    }

    async request_data(){
        if(this.data==null){
            this.data = await Request.get(this.api_access_key)
        }else{
                this.data=this.data
        }
    }

    async convert(input_access_key:string, quantity:number, curr_from:string, curr_to:string) {
        this.get_access_key(input_access_key)
        return this.request_data().then(
            ()=>{
            return round(quantity*(1/this.data.rates[curr_from])*this.data.rates[curr_to], 2)
        })
    }
}