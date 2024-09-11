import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LogInterceptor implements NestInterceptor{
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>  {

    /**
     * 요청이 등어올때 REQ 요청이 들어온 타임스탬프를 찍는다.
     * [REQ] {요청 path} {요청 시간}
     * 
     * 요청이 끝날때 (응답이 나갈때) 다시 타임스탬프를 찍는다
     * [RES] {요청 path} {응당 시간}{얼마나 걸렸는지}
     */
    const now = new Date();
    const req = context.switchToHttp().getRequest();

    const path = req.originalUrl;
    

    console.log(`[req] ${path} ${now.toLocaleString('kr')}`)

    // return next.handle() 실행하는 순간
    // 라우트의 로직이 전부 실행되고 응답이 반환된다.
    // observable로
    return next
        .handle()
        .pipe(
            tap(
                // [res]{요청 path}{응답 시간}{얼마나 걸렸는지 ms}
                (observable)=> console.log(`[RES] ${path} ${new Date().toLocaleString('kr')} ${new Date().getMilliseconds() - now.getMilliseconds()}`)
            )
        )
  }
}