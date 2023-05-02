import {Routing} from "express-zod-api"
import {helloWorldEndpoint} from "./endpoint"

export const routing: Routing = {
    v1: {
        hello: helloWorldEndpoint
    }
}
