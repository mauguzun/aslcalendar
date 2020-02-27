import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CalendarEvent } from '../calendar-event.model';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getEvent: any;


  viewEvent(id:string) {
    return this.http.get(`${environment.baseUrl}/viewevent?id=${id}`);
  }

  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    return this.http.post(`${environment.baseUrl}/home`, { email, password });
  }


  createEvent(argEvent: CalendarEvent) {

    const event = Object.assign({}, argEvent);
    event.deadline = moment(event.deadline).format('YYYY-MM-DD HH:mm:ss');
    for (const iterator of event.options) {
      iterator.start = moment(iterator.start).format('YYYY-MM-DD HH:mm:ss');
      iterator.end = moment(iterator.end).format('YYYY-MM-DD HH:mm:ss');
    }

    return this.http.post(`${environment.baseUrl}/event`, { event });
  }


}
