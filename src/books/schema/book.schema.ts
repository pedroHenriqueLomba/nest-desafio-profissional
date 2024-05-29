import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema({ timestamps: true })
export class Book {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  ean: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
