export class API {
    api_key:string;
    constructor(access_key: string) {
        this.api_key = "http://data.fixer.io/api/latest?access_key="+access_key+"&base=USD";
    }
    get_api_key() {
        return this.api_key
    }
}
