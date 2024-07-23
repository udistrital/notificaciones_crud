import { ApiProperty} from '@nestjs/swagger';

export class NotificacionDto {

    @ApiProperty()
    readonly sistema_id: string;

    @ApiProperty()
    readonly tipo_notificacion_id: string;

    @ApiProperty()
    readonly destinatario: string

    @ApiProperty()
    readonly destinatarios?: string[]

    @ApiProperty()
    readonly remitente: string;

    @ApiProperty()
    readonly asunto: string;

    @ApiProperty()
    readonly mensaje: string;

    @ApiProperty({ default: false })
    lectura: boolean;

    @ApiProperty()
    fecha_lectura: Date;

    @ApiProperty()
    metadatos: object;

    @ApiProperty()
    activo: boolean;

    @ApiProperty()
    fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;
    
}

import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection: 'notificacion'})
export class Notificacion extends Document {

    @Prop({required: true})
    sistema_id: string

    @Prop({required: true})
    tipo_notificacion_id: string

    @Prop({required: true})
    destinatario: string

    @Prop({required: true})
    remitente: string

    @Prop({required: true})
    asunto: string

    @Prop({required: true})
    mensaje: string

    @Prop({required: true, default: false})
    lectura: boolean

    @Prop({required: false})
    fecha_lectura: Date

    @Prop({required: false, type: Object})
    metadatos: object

    @Prop({required: true})
    activo: boolean

    @Prop({required: true})
    fecha_creacion: Date

    @Prop({required: true})
    fecha_modificacion: Date

}

export const NotitficacionSchema = SchemaFactory.createForClass(Notificacion);
