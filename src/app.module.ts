import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './config/configuration';
import { LoggerMiddleware } from './logger/logger';
import { Notificacion, NotitficacionSchema } from './models/notificacion.dtoSchema';
import { NotificacionController } from './controllers/notificacion.controller';
import { NotificacionService } from './services/notificacion.service';
import { TipoNotificacion, TipoNotificacionSchema } from './models/tipo_notificacion.dtoSchema';
import { TipoNotificacionController } from './controllers/tipo_notificacion.controller';
import { TipoNotificacionService } from './services/tipo_notificacion.service';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${environment.USER}:${environment.PASS}@`+`${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`),
    MongooseModule.forFeature([
      { name: Notificacion.name, schema: NotitficacionSchema },
      { name: TipoNotificacion.name, schema: TipoNotificacionSchema }
    ])
  ],
  controllers: [AppController, NotificacionController, TipoNotificacionController],
  providers: [AppService, NotificacionService, TipoNotificacionService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
