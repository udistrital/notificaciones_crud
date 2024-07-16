import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { SistemaService } from '../services/sistema.service';
import { SistemaDto } from '../models/sistema.dtoSchema';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sistema')
@Controller('sistema')
export class SistemaController {
    constructor(private readonly sistemaService: SistemaService) {}

    @Post()
    async post(@Res() res, @Body() sistemaDto: SistemaDto) {
        this.sistemaService.post(sistemaDto).then(sistema => {
            res.status(HttpStatus.CREATED).json({
                Success: true,
                Status: HttpStatus.CREATED,
                Message: 'Registration successful',
                Data: sistema
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
        this.sistemaService.getAll(filterDto).then(sistema => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: sistema
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
        this.sistemaService.getById(_id).then(sistema => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: sistema
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
    async put(@Res() res, @Param('_id') _id: string, @Body() sistemaDto: SistemaDto) {
        this.sistemaService.put(_id, sistemaDto).then(sistema => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Update successful',
                Data: sistema
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
        this.sistemaService.delete(_id).then(sistema => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Delete successful',
                Data: sistema
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
