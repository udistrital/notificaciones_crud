import { ApiProperty} from '@nestjs/swagger';

export class SistemaDto{

    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly descripcion: string;

    @ApiProperty()
    readonly codigo_abreviacion: string;
    
}

import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection: 'sistema'})
export class Sistema extends Document{

    @Prop({required: true})
    nombre: string

    @Prop({required: true})
    descripcion: string

    @Prop({required: true})
    codigo_abreviacion: string

}

export const SistemaSchema = SchemaFactory.createForClass(Sistema);