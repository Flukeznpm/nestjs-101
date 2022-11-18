import { Injectable } from '@nestjs/common';
import { ProductDTO } from '../dto/product.dto';

@Injectable()
export class ProductService {
  private products: ProductDTO[] = [
    { id: 1, name: 'Mango', price: 250, qty: 10 },
    { id: 2, name: 'Melon', price: 350, qty: 10 },
    { id: 3, name: 'Banana', price: 450, qty: 10 },
  ];
  findAll(): ProductDTO[] {
    return this.products;
  }

  findById(id: number) {
    return this.products.find((p) => p.id === id);
  }

  // method รับเป็น arrow function ชื่อ predicate(functionที่reture boolean)
  findByCondition(predicate: (product: ProductDTO) => boolean) {
    return this.products.filter((p) => predicate(p));
  }
}
