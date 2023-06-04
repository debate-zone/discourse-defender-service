import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { Input } from './types';
import { ContentTypeEnum } from './enum/ContentTypeEnum';
import { baseSchema } from '../../debate-zone-micro-service-common-library/src/mongoose/baseSchema';
import { CollectionsEnum } from '../../debate-zone-micro-service-common-library/src/enums/collectionsEnum';
import { ProviderEnum } from './enum/ProviderEnum';
import { HateSpeechTypeEnum } from './enum/HateSpeechTypeEnum';

export type MongooseDocument = Document & Input;

export const mongooseSchema: mongoose.Schema = baseSchema.add({
    debateZoneId: {
        type: Types.ObjectId,
        ref: CollectionsEnum.DEBATE_ZONE,
        required: true,
    },
    contentType: {
        type: String,
        enum: Object.values(ContentTypeEnum),
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    reportingUserId: {
        type: Types.ObjectId,
        ref: CollectionsEnum.USER,
        required: true,
    },
    reportedUserId: {
        type: Types.ObjectId,
        ref: CollectionsEnum.USER,
        required: true,
    },
    provider: {
        type: String,
        enum: Object.values(ProviderEnum),
        required: false,
    },
    startPredictionTime: {
        type: Date,
        required: false,
    },
    endPredictionTime: {
        type: Date,
        required: false,
    },
    hateType: {
        type: String,
        enum: Object.values(HateSpeechTypeEnum),
        required: false,
    },
    status: {
        type: String,
        enum: Object.values(StatusEnum),
        required: true,
    },
});

export const discourseDefender = mongoose.model<MongooseDocument>(
    CollectionsEnum.DISCOURSE_DEFENDER,
    mongooseSchema,
);
