import { IsString, IsInt, IsArray } from 'class-validator';
export class CartDTO {
  @IsInt()
  id: number;

  @IsString()
  userId: string;

  @IsArray()
  items: Array<number>;
}
