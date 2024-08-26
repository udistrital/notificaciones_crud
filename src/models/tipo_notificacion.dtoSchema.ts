import { ApiProperty} from '@nestjs/swagger';

export class TipoNotificacionDto {

    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly descripcion: string;

    @ApiProperty()
    readonly codigo_abreviacion: string;

    @ApiProperty()
    prioridad: number;
    
}

import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection: 'tipo_notificacion'})
export class TipoNotificacion extends Document {

    @Prop({required: true})
    nombre: string

    @Prop({required: true})
    descripcion: string

    @Prop({required: true})
    codigo_abreviacion: string

    @Prop({required: true})
    prioridad: number

}

export const TipoNotificacionSchema = SchemaFactory.createForClass(TipoNotificacion);