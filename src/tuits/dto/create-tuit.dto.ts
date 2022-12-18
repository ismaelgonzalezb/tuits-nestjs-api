import { IsString } from 'class-validator';

export class CreateTuitDtoTs {
  @IsString()
  readonly message: string;
}
