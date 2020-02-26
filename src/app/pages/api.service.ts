import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    return this.http.post(`${environment.baseUrl}`, { email, password })

  }


}
