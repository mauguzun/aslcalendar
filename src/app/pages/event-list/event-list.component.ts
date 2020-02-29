import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CalendarEvent } from 'src/app/calendar-event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.less']
})
export class EventListComponent implements OnInit {

  public events: CalendarEvent[] = null ;
  constructor(private apiService: ApiService) { }
 
  ngOnInit() {

    this.apiService.getEvents().subscribe(e => {
      if (e['error'] === null) {
        this.events = e['data']
      }
    })
  }

}
