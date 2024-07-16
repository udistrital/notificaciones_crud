import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { FiltersService } from 'src/filters/filters.service';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { NotificacionDto as MainDto, Notificacion as MainModel } from '../models/notificacion.dtoSchema';
import { Sistema } from 'src/models/sistema.dtoSchema';
import { TipoNotificacion } from 'src/models/tipo_notificacion.dtoSchema';

@Injectable()
export class NotificacionService {
    constructor(
        @InjectModel(MainModel.name)
        private readonly mainModel: Model<MainModel>,

        // ? inyectar modelos relacionados para verificar existencia y popular
        @InjectModel(Sistema.name)
        private readonly sistemaModel: Model<Sistema>,
        @InjectModel(TipoNotificacion.name)
        private readonly tipoNotificacionModel: Model<TipoNotificacion>
    ) {}

    /**
     * Revisa si los _ids de las colecciones relacionadas existen.
     * Detiene el post o put si no hay concordancia.
     * ? Agregar demás comprobaciones si se añaden más relaciones.
     * @param mainDto - modelo dto que se desea verificar.
     */
    private async checkRelated(mainDto: MainDto) {
        if (mainDto.sistema_id) {
            const sistemaId = await this.sistemaModel.exists({ _id: mainDto.sistema_id });
            if (!sistemaId) {
                throw new Error(`sistema_id: ${mainDto.sistema_id} doesn't exist`);
            }
        }
        if (mainDto.tipo_notificacion_id) {
            const tipoNotificacionId = await this.tipoNotificacionModel.exists({ _id: mainDto.tipo_notificacion_id });
            if (!tipoNotificacionId) {
                throw new Error(`tipo_notificacion_id: ${mainDto.tipo_notificacion_id} doesn't exist`);
            }
        }
    }

    /**
     * Retorna la lista de colecciones a popular segun relación con la coleción actual.
     * ? Agregar aquí si se relacionan más colecciones.
     */
    private populatefields(): any[] {
        return [
            { path: Sistema.name + 'Id' },
            { path: TipoNotificacion.name + 'Id' }
        ]
    }

    // ? funciones REST generalizadas
    async post(mainDto: MainDto): Promise<MainDto> {
        const dateNow = new Date();
        const newdoc = new this.mainModel(mainDto);
        newdoc.fecha_creacion = dateNow;
        newdoc.fecha_modificacion = dateNow;
        await this.checkRelated(newdoc);
        return await newdoc.save();
    }

    async getAll(filterDto: FilterDto): Promise<MainDto[]> {
        const filterService = new FiltersService(filterDto);
        let populatefields = [];
        if (filterService.isPopulated()) {
            populatefields = this.populatefields();
        }
        return await this.mainModel.find(
            filterService.getQuery(),
            filterService.getFields(),
            filterService.getLimitAndOffset()
        ).sort(
            filterService.getSortBy()
        ).populate(populatefields);
    }

    async getById(_id: string): Promise<MainDto> {
        const doc = await this.mainModel.findById(_id);
        if (!doc) {
            throw new Error(`${_id} doesn't exist`);
        }
        return doc;
    }

    // async put(_id: string, mainDto: MainDto): Promise<MainDto> {
    //     mainDto.fecha_modificacion = new Date();
    //     if (mainDto.fecha_creacion) {
    //         delete mainDto.fecha_creacion;
    //     }
    //     await this.checkRelated(mainDto);
    //     return await this.mainModel.findByIdAndUpdate(_id, mainDto, { new: true });
    // }

    async put(_id: string, mainDto: MainDto): Promise<MainModel> {
        await this.checkRelated(mainDto);
    
        const notificacion = await this.mainModel.findById(_id);
        if (!notificacion) {
            throw new Error(`${_id} doesn't exist`);
        }

        if (notificacion.lectura !== true) {
            notificacion.lectura = true;
            notificacion.fecha_lectura = new Date();
            return await notificacion.save();
        }
    }

    async delete(_id: string): Promise<MainDto> {
        //const deleted = await this.mainModel.findByIdAndDelete(_id);
        const deleted = await this.mainModel.findByIdAndUpdate(_id, { activo: false }, { new: true });
        if (!deleted) {
            throw new Error(`${_id} doesn't exist`);
        }
        return deleted;
    }
}
