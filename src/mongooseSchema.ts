import * as mongoose from "mongoose"
import {Document} from "mongoose"
import {Input} from "./types"

export type MongooseDocument = Document & Input

export const mongooseSchema: mongoose.Schema = new mongoose.Schema({
    name: {type: String, required: false},
})

export const mongooseModel = mongoose.model<MongooseDocument>("hello", mongooseSchema)
