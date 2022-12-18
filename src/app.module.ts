import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tuit } from './tuits/entities';

import { TuitsModule } from './tuits/tuits.module';

@Module({
  imports: [
    TuitsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'tuits',
      entities: [Tuit],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
