import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CalendarEvent, ViewLogin } from '../calendar-event.model';
import * as moment from 'moment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }


  setStatus(id: string, status: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}status?id=${id}&status=${status}`);
  }

  getEvents(): Observable<any> {
    return this.http.get(`${environment.baseUrl}eventlist`);
  }

  getManage(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}manage?id=${id}`);
  }



  vote(event: CalendarEvent, viewLogin: ViewLogin, selected: Set<string>, code: string | null): Observable<any> {
    return this.http.post(`${environment.baseUrl}vote?id=${event.id}`, { viewLogin, selected: [...selected], code });
  }






  viewEvent(id: string, viewLogin: ViewLogin): Observable<any> {
    return this.http.post(`${environment.baseUrl}viewevent?id=${id}`, { viewLogin });
  }




  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.baseUrl}home`, { email, password });
  }


  createEvent(argEvent: CalendarEvent) : Observable<any> {

    const event = Object.assign({}, argEvent);
    event.deadline = moment(event.deadline).format('YYYY-MM-DD HH:mm:ss');
    for (const iterator of event.options) {
      iterator.start = moment(iterator.start).format('YYYY-MM-DD HH:mm:ss');
      iterator.end = moment(iterator.end).format('YYYY-MM-DD HH:mm:ss');
    }

    return this.http.post(`${environment.baseUrl}event`, { event });
  }


}
