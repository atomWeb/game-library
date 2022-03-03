import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { SpinnerService } from '../services/spinner.service';
import { finalize, catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  count = 0;

  constructor(private loader: SpinnerService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.show();
    this.count++;
        
    const token = localStorage.getItem('auth-token');

    const authReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
        'Accept': '*/*',
      }),
    });

    // console.log('Intercepted HTTP call', authReq);

    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          // this.router.navigateByUrl('/login');
        }

        return throwError(() => err);
      }),
      finalize(() => {
        this.count--;        
        if (this.count == 0) this.loader.hide();
      })
    );
  }
}
