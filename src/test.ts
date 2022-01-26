import {readJson, readJsonSync, writeJson, writeJsonSync} from 'https://deno.land/x/jsonfile/mod.ts'

export class LoadJSON {
    public static async get_data(){
        //const data:any = await readJsonSync("./data.json");
        //console.log(typeof data)
        //console.log(data.rates)
        //return data
    }
}

//const x = LoadJSON.get_data();
//console.log(x)



const text = JSON.parse(await Deno.readTextFile('data.json'))
console.log(text.rates.EUR)
console.log(typeof text)