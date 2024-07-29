import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { TipoNotificacionService } from '../services/tipo_notificacion.service';
import { TipoNotificacionDto } from '../models/tipo_notificacion.dtoSchema';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tipo_notificacion')
@Controller('tipo_notificacion')
export class TipoNotificacionController {
    constructor(private readonly tipoNotificacionService: TipoNotificacionService) {}

    @Post()
    async post(@Res() res, @Body() tipoNotificacionDto: TipoNotificacionDto) {
        this.tipoNotificacionService.post(tipoNotificacionDto).then(tipoNotificacion => {
            res.status(HttpStatus.CREATED).json({
                Success: true,
                Status: HttpStatus.CREATED,
                Message: 'Registration successful',
                Data: tipoNotificacion
            })
        }).catch(error => {
            res.status(HttpStatus.BAD_REQUEST).json({
                Success: false,
                Status: HttpStatus.BAD_REQUEST,
                Message: 'Error service Post: The request contains an incorrect data type or an invalid parameter',
                Data: error.message
            })
        });
    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto) {
        this.tipoNotificacionService.getAll(filterDto).then(tipoNotificacion => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: tipoNotificacion
            })
        }).catch(error => {
            res.status(HttpStatus.NOT_FOUND).json({
                Success: false,
                Status: HttpStatus.NOT_FOUND,
                Message: 'Error service GetAll: The request contains an incorrect parameter or no record exist',
                Data: error.message
            })
        })
    }

    @Get('/:_id')
    async getById(@Res() res, @Param('_id') _id: string) {
        this.tipoNotificacionService.getById(_id).then(tipoNotificacion => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: tipoNotificacion
            })
        }).catch(error => {
            res.status(HttpStatus.NOT_FOUND).json({
                Success: false,
                Status: HttpStatus.NOT_FOUND,
                Message: 'Error service GetOne: The request contains an incorrect parameter or no record exist',
                Data: error.message
            })
        })
    }

    @Put('/:_id')
    async put(@Res() res, @Param('_id') _id: string, @Body() tipoNotificacionDto: TipoNotificacionDto) {
        this.tipoNotificacionService.put(_id, tipoNotificacionDto).then(tipoNotificacion => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Update successful',
                Data: tipoNotificacion
            })
        }).catch(error => {
            res.status(HttpStatus.BAD_REQUEST).json({
                Success: false,
                Status: HttpStatus.BAD_REQUEST,
                Message: 'Error service Put: The request contains an incorrect data type or an invalid parameter',
                Data: error.message
            })
        })
    }

    @Delete('/:_id')
    async delete(@Res() res, @Param('_id') _id: string) {
        this.tipoNotificacionService.delete(_id).then(tipoNotificacion => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Delete successful',
                Data: tipoNotificacion
            })
        }).catch(error => {
            res.status(HttpStatus.NOT_FOUND).json({
                Success: false,
                Status: HttpStatus.NOT_FOUND,
                Message: 'Error service Delete: Request contains incorrect parameter',
                Data: error.message
            })
        })
    }
}
