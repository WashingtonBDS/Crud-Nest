import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Gato, GatoSchema,  } from './gato/gato';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Gato.name,
        schema: GatoSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
  controllers: [],
  providers: [],
})
export class GatosModule {}
