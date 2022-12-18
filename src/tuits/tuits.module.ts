import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tuit } from './entities';
import { TuitsController } from './tuits.controller';
import { TuitsService } from './tuits.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Tuit])],
  controllers: [TuitsController],
  providers: [TuitsService],
})
export class TuitsModule {}
