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
import { AuthService } from '@auth0/auth0-angular';

// import { SpinnerService } from '../services/spinner.service';
// import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';
import { finalize, catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  count = 0;
  token?: string;

  constructor(
    // private loader: SpinnerService,
    private auth0: AuthService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.loader.show();
    this.count++;
    // const isApiUrl = request.url.startsWith(environment.apiUrl);
    // const token = localStorage.getItem('auth-token');
    this.auth0.idTokenClaims$.subscribe((claims) => {
      this.token = claims?.__raw;
      console.log(this.token);
    });

    const authReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${this.token}`,
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
      })
    );
    // // if (token && isApiUrl) {
    // request = request.clone({
    //   setHeaders: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `${token}`,
    //     'Access-Control-Allow-Origin': 'http://localhost:4200, http://nabugames.duckdns.org/',
    //     'Accept': '*/*',
    //   },
    // });
    // // }

    // return next.handle(authReq).pipe(
    //   catchError((error) => {
    //     if (error instanceof HttpErrorResponse) {
    //       if (error.error instanceof ErrorEvent) {
    //         console.error('Error Event');
    //       } else {
    //         console.log(`error status : ${error.status} ${error.statusText}`);
    //         switch (error.status) {
    //           case 400:
    //             break;
    //           case 401: //login
    //             // this.router.navigateByUrl('/');
    //             // this.authService.signout();
    //             break;
    //           case 403: //forbidden
    //             // this.router.navigateByUrl('/unauthorized');
    //             break;
    //         }
    //       }
    //     } else {
    //       console.error('some thing else happened');
    //     }
    //     return throwError(error);
    //   }),
    //   finalize(() => {
    //     this.count--;
    //     // if (this.count == 0) this.loader.hide();
    //   })
    // );
  }
}
