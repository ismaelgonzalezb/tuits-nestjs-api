import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTuitDtoTs } from './dto';
import { Tuit } from './entities';
import { UpdateTuitDto } from './dto/update-tuit.dto';

@Injectable()
export class TuitsService {
  // private tuits: Tuit[] = [
  //   {
  //     id: '1',
  //     message: 'Hello, this is my new tuit!',
  //   },
  // ];

  constructor(
    @InjectRepository(Tuit)
    private readonly tuitsRepository: Repository<Tuit>,
  ) {}

  getTuits() {
    return this.tuitsRepository.find();
  }

  async getTuit(id: string) {
    const tuit = await this.tuitsRepository.findOneBy({ id: +id });
    //return this.tuits.find((item) => item.id === id);

    if (!tuit) {
      throw new NotFoundException('Tuit not found!');
    }

    return tuit;
  }

  async createTuit(tuit: CreateTuitDtoTs) {
    const tuitToCreate = this.tuitsRepository.create(tuit);

    await this.tuitsRepository.save(tuitToCreate);
  }

  // this.tuits.push({
  //   id: (Math.floor(Math.random() * 2000) + 1).toString(),
  //   message,
  // });

  // updateTuit(id: string, { message }: CreateTuitDtoTs) {
  //   // const tuit: Tuit = this.getTuit(id);
  //   // tuit.message = message;
  //   // return tuit;
  // }

  async deleteTuit(id: string) {
    const tuit = await this.tuitsRepository.findOneBy({ id: +id });

    if (!tuit) {
      throw new NotFoundException(`Tuit not found!`);
    }

    this.tuitsRepository.delete({ id: +id });
    // const index = this.tuits.findIndex((tuit) => tuit.id === id);
    //   if (index >= 0) {
    //     this.tuits.splice(index, 1);
    //   }
    // }
  }

  async updateTuit(id: string, tuit: UpdateTuitDto) {
    const tuitToUpdate = await this.tuitsRepository.preload({
      id: +id,
      message: tuit.message,
    });

    if (!tuitToUpdate) {
      throw new NotFoundException('Tuit wasnt found!');
    }

    await this.tuitsRepository.save(tuitToUpdate);

    return true;
  }

  // async updateTuit(id: string, properties: any) {
  //   const tuitToUpdate = await this.tuitsRepository.preload({
  //     id: +id,
  //     ...properties,
  //   });

  //   // const tuitToUpdate = await this.tuitsRepository.findOneBy({id: +id});

  //   if (!tuitToUpdate) {
  //     throw new NotFoundException('Tuit wasnt found!');
  //   }

  //   await this.tuitsRepository.save(tuitToUpdate);

  //   return true;
  // }
}
