import { IsString, IsInt } from 'class-validator';
export class ProductDTO {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsInt()
  price: number;

  @IsInt()
  qty: number;
}
