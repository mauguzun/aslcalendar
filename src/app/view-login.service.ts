import { Injectable } from '@angular/core';
import { ViewLogin } from './calendar-event.model';
import { View } from '@fullcalendar/core';

@Injectable({
  providedIn: 'root'
})
export class ViewLoginService {

  constructor() { }


  getData(): ViewLogin | null {

    if (window.localStorage.getItem('name')) {
      return new ViewLogin(window.localStorage.getItem('name'), window.localStorage.getItem("emails"));
    }
    return null;
  }

  setData(viewLogin: ViewLogin) {
    console.log(viewLogin)
    window.localStorage.setItem('name',viewLogin.name)
    window.localStorage.setItem('email',viewLogin.email)
  }
}
