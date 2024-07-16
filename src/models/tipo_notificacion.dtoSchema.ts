import { ApiProperty} from '@nestjs/swagger';

export class TipoNotificacionDto {

    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly descripcion: string;

    @ApiProperty()
    readonly codigo_abreviacion: string;
    
}

import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection: 'tipo-notificacion'})
export class TipoNotificacion extends Document {

    @Prop({required: true})
    nombre: string

    @Prop({required: true})
    descripcion: string

    @Prop({required: true})
    codigo_abreviacion: string

}

export const TipoNotificacionSchema = SchemaFactory.createForClass(TipoNotificacion);