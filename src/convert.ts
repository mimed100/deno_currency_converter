import loadJsonFile from 'https://deno.land/x/load_json_file@v1.0.0/mod.ts'
import {round} from "https://deno.land/x/math@v1.1.0/mod.ts";

export class FiatConverter {
    convData: any; 

    async get_data(){
        this.convData = await loadJsonFile("./src/data.json");
    }

    async get_convert(quantity:number, curr_from:string, curr_to:string) {
        return this.get_data().then(()=>{
            return round(quantity*(1/this.convData.rates[curr_from])*this.convData.rates[curr_to], 2)})
            
    }
}

console.log("RESULT: "+await new FiatConverter().get_convert(1, "EUR", "USD"))
