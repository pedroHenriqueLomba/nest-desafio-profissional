import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { MultiplicateProductPriceMiddleware } from './product/middlewares/multiplicate-product-price.middleware';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot('mongodb://localhost:27017/desafio-2-bi'),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MultiplicateProductPriceMiddleware).forRoutes('product');
  }
}
