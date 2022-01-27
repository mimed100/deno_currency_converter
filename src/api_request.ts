import {Request} from 'https://deno.land/x/request@1.3.2/mod.ts'
import{api_key} from './api_key.ts'
import {writeJson, writeJsonSync} from 'https://deno.land/x/jsonfile/mod.ts'

import { sleep } from "https://deno.land/x/sleep/mod.ts";

const data = await Request.get(api_key.req_api_key)
export const exData = await writeJson("./src/data.json",data)