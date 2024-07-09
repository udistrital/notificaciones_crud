import { ApiProperty} from '@nestjs/swagger';

export class PlantillaDto {

    @ApiProperty()
    readonly sistema_id: string;

    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly descripcion: string;

    @ApiProperty()
    codigo_abreviacion: string;

    @ApiProperty()
    plantilla_mensaje: string;

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

@Schema({collection: 'plantilla'})
export class Plantilla extends Document {

    @Prop({required: true})
    sistema_id: string

    @Prop({required: true})
    nombre: string

    @Prop({required: true})
    descripcion: string

    @Prop({required: true})
    codigo_abreviacion: string

    @Prop({required: true})
    plantilla_mensaje: string

    @Prop({required: true, type: Object})
    metadatos: object

    @Prop({required: true})
    activo: boolean

    @Prop({required: true})
    fecha_creacion: Date

    @Prop({required: true})
    fecha_modificacion: Date

}

export const PlantillaSchema = SchemaFactory.createForClass(Plantilla);