import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatosModule } from './gatos/gatos.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), GatosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
