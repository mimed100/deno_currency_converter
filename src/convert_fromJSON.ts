import loadJsonFile from 'https://deno.land/x/load_json_file@v1.0.0/mod.ts'
import {round} from "https://deno.land/x/math@v1.1.0/mod.ts";

export class FiatConverter_fromJSON {
    data:any;
    async get_data(){
        this.data = await loadJsonFile("./src/data.json");
    }
    async convert(quantity:number, curr_from:string, curr_to:string) {
        return this.get_data().then(
            ()=>{
                const result = quantity*(1/this.data.rates[curr_from])*this.data.rates[curr_to]
            return round(result)
            }
        )
    }
}