import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/event.service';
import { CalendarEvent } from 'src/app/calendar-event.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.less']
})
export class StepsComponent implements OnInit {

  constructor(public eventService:EventService) { }

  ngOnInit() {
    this.eventService.calendarEvent = new CalendarEvent();
  }
 

  
}
