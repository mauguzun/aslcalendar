import { Injectable } from '@angular/core';
import { CalendarEventOption, CalendarEvent } from './calendar-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }


  public calendarEvent: CalendarEvent = null;

  public eventType =
    [
      {
        type: 1,
        text: 'Pilots appointment',
        img: 'https://www.pilotcareernews.com/wp-content/uploads/2015/07/2015outlook.jpg'
      },
      {
        type: 2,
        text: 'Cabin Crew Appointement',
        img: 'https://www.airbaltic.com/cabin-crew/assets/img/photo-1.jpg'
      },
      {
        type: 3,
        text: 'Other People Appointement',
        img: 'https://leveragedsales.com/wp-content/uploads/2017/10/Become-Amazing-at-Meeting-People@1x.jpg'
      },
    ];

  public eventStatus = [
    { type: 1, text: 'Active voting' },
    { type: 2, text: 'End voting and send confirmation  email' },
    { type: 3, text: 'Cancel event and send confirmation  email' },
  ];



  getType(): string | null {
    if (this.calendarEvent) {
      return this.eventType.find(x => x.type === this.calendarEvent.type).text;

    }
    return null;
  }

}
