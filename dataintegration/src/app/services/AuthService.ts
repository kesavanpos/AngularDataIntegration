import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<User> {
    // Implement login logic
    return this.http.post<User>('login-url', credentials);
  }

  logout(): void {
    // Implement logout logic
  }

  isAuthenticated(): boolean {
    // Implement authentication check logic
    // For demonstration purposes, return false by default
    return false;
  }
}
