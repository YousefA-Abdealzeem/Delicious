import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  private apiBaseUrl = 'http://localhost:3001/';

  constructor(private http: HttpClient) { }

  // ---------- Contact Messages ----------
  getContactMessages(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}contactMessages`);
  }

  addContactMessage(message: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}contactMessages`, message);
  }

  deleteContactMessage(id: number): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}contactMessages/${id}`);
  }

  updateContactMessage(id: number, message: any): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}contactMessages/${id}`, message);
  }

  // ---------- Chefs ----------
  getChefs(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}chefs`);
  }

  // ---------- Menu ----------
  getMenu(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}menu`);
  }

  // ---------- Contact Info ----------
  getContact(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}contact`);
  }

}
