import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('sending request');
    const modifiedRequest = req.clone({
      headers: req.headers.append('DummyAuthorization', 'authToken'),
    });
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log('just checking the response interceptor: ', event);
      })
    );
  }
}
