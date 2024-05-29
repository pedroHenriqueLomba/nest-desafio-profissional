import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class MultiplicateProductPriceMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.body.price) {
      req.body.price = req.body.price * 1.5;
    }
    next();
  }
}
