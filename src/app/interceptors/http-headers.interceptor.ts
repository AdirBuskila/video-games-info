import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      // setHeaders: {
      //   'x-rapidapi-key': 'ff341491cdd44899abe36efbc3a1ddaa',
      //   'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      // },
      setParams: {
        key: 'ff341491cdd44899abe36efbc3a1ddaa',
      },
    });
    return next.handle(req);
  }
}
