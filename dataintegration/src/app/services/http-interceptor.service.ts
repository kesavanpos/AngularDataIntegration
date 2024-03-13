import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Append headers here as needed
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers you need
    });

    // Clone the request and append headers
    const modifiedRequest = request.clone({ headers });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
