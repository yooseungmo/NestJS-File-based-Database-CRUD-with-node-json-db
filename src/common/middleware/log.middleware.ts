import { Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

export class LogMiddleware implements NestMiddleware{
  private logger = new Logger('HTTP')

  use(req: Request, res: Response, next: NextFunction) {
      this.logger.log(`[REQ] ${req.method} ${req.url} ${new Date().toLocaleString('kr')}`)
      next()
    }
}


// import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class LogMiddleware implements NestMiddleware {
//   private logger = new Logger('HTTP');

//   use(req: Request, res: Response, next: NextFunction) {
//     const start = Date.now();

//     res.on('finish', () => {
//       const duration = Date.now() - start;
//       this.logger.log(`[RES] ${req.method} ${req.url} ${res.statusCode} - ${duration}ms`);
//     });

//     this.logger.log(`[REQ] ${req.method} ${req.url} ${new Date().toLocaleString('kr')} - IP: ${req.ip}`);
//     next();
//   }
// }