export class API_KEY {
    req_api_key:string;

    constructor(api_access_key:string){
        this.req_api_key = "http://data.fixer.io/api/latest?access_key="+api_access_key
    }
    get_key(api_access_key:string) {
        return this.req_api_key
    }
}

// Enter your fixer.io private API access Key HERE as string ""
export let api_key = new API_KEY("928d9df316f02c8475d137a189d97112");








