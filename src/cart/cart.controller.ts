import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { CartDTO } from 'src/dto/cart.dto';
import { CartService } from './cart.service';
import { ValidationPipe } from '../validation/validation.pipe';

@Controller('cart')
export class CartController {
  constructor(private cartSetvice: CartService) {}
  @Get()
  getCartAll(): CartDTO[] {
    return this.cartSetvice.findAll();
  }

  @Get('/user')
  getCartByUserId(@Query() query: { userId: string }) {
    return this.cartSetvice.findByUserId(query.userId);
  }

  @Post('/user-cart')
  @UsePipes(ValidationPipe)
  getCartByUserIdAndCartId(@Body() body: CartDTO) {
    const { userId, id } = body;
    const cartId = id;
    return this.cartSetvice.findByUserIdAndCartId(userId, cartId);
  }
}
