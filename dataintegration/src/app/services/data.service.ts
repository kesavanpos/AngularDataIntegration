import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://your-api-base-url'; // Update this with your API base URL

  // Method to fetch JSON data from a file
  getJsonData(): Observable<any> {
    return this.http.get<any>('assets/attributeschema.json');
  }

  // Generic method to perform HTTP GET request
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`);
  }

  // Generic method to perform HTTP POST request
  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, data);
  }

  // Generic method to perform HTTP PUT request
  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${url}`, data);
  }

  // Generic method to perform HTTP PATCH request
  patch<T>(url: string, data: any): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${url}`, data);
  }

  // Method to perform HTTP DELETE request
  delete(url: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${url}`);
  }
}
