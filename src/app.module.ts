import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { Notificacion, NotitficacionSchema } from './models/notificacion.dtoSchema';
import { NotificacionController } from './controllers/notificacion.controller';
import { NotificacionService } from './services/notificacion.service';
import { Plantilla, PlantillaSchema } from './models/plantilla.dtoSchema';
import { PlantillaController } from './controllers/plantilla.controller';
import { PlantillaService } from './services/plantilla.service';
import { Sistema, SistemaSchema } from './models/sistema.dtoSchema';
import { SistemaController } from './controllers/sistema.controller';
import { SistemaService } from './services/sistema.service';
import { TipoNotificacion, TipoNotificacionSchema } from './models/tipo_notificacion.dtoSchema';
import { TipoNotificacionController } from './controllers/tipo_notificacion.controller';
import { TipoNotificacionService } from './services/tipo_notificacion.service';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017`),
    MongooseModule.forFeature([
      { name: Notificacion.name, schema: NotitficacionSchema },
      { name: Plantilla.name, schema: PlantillaSchema },
      { name: Sistema.name, schema: SistemaSchema },
      { name: TipoNotificacion.name, schema: TipoNotificacionSchema }
    ])
  ],
  controllers: [AppController, NotificacionController, PlantillaController, SistemaController, TipoNotificacionController],
  providers: [AppService, NotificacionService, PlantillaService, SistemaService, TipoNotificacionService],
})
export class AppModule {}
