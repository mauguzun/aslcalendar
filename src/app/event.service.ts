import { Injectable } from '@angular/core';
import { CalendarEventOption } from './calendar-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  public title: string = null;
  public notes: string = null;
  public type: number = null;

  public optionsList: CalendarEventOption[] = [];

  public eventType =
    [
      { type: 1, text: 'Custom event' },
      { type: 2, text: 'Group Chat' },
      { type: 3, text: 'Meeting' },
    ];

  getType() {

    return this.eventType.find(x => x.type === this.type).text;
  }

}
