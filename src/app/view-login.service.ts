import { Injectable } from '@angular/core';
import { ViewLogin } from './calendar-event.model';
import { View } from '@fullcalendar/core';

@Injectable({
  providedIn: 'root'
})
export class ViewLoginService {

  constructor() { }


  getData(): ViewLogin | null {

    if (window.localStorage.getItem('name') && window.localStorage.getItem("email")) {
      return new ViewLogin(window.localStorage.getItem('name'), window.localStorage.getItem("email"));
    }
    return null;
  }

  setData(viewLogin: ViewLogin) {

   

    window.localStorage.setItem('name', viewLogin.name)
    window.localStorage.setItem('email', viewLogin.email)
  }
}
