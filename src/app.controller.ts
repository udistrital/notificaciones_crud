import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

@ApiTags('health-check')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiExcludeEndpoint()
  healthcheck(): Object {
    return this.appService.healthcheck();
  }
}
