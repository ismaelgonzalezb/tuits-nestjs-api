import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { TuitsService } from './tuits.service';
import { CreateTuitDtoTs } from './dto';
import { UpdateTuitDto } from './dto';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {}

  @Get()
  getTuits() {
    return this.tuitService.getTuits();
  }

  @Get(':id')
  getTuit(@Param('id') id: string) {
    return this.tuitService.getTuit(id);
    //return `Your tuit is ${id}`;
  }

  @Post()
  createTuit(@Body() message: CreateTuitDtoTs) {
    return this.tuitService.createTuit(message);
    //return `Your tuit was : ${message}`;
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() tuit: UpdateTuitDto) {
    return this.tuitService.updateTuit(id, tuit);
    //return `Your tuit ${id} has been updated!`;
  }
  // @Patch(':id')
  // updateTuit(@Param('id') id: string, @Body() properties: any) {
  //   return this.tuitService.updateTuit(id, properties);
  //   //return `Your tuit ${id} has been updated!`;
  // }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteTuit(@Param('id') id: string) {
    return this.tuitService.deleteTuit(id);
    //return `Your tuit ${id} has been deleted!`;
  }
}
