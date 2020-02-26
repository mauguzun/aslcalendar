import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormControl } from '@angular/forms';
import { EventService } from 'src/app/event.service';
import { CalendarEvent } from 'src/app/calendar-event.model';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-begin-form',
  templateUrl: './begin-form.component.html',
  styleUrls: ['./begin-form.component.less']
})
export class BeginFormComponent implements OnInit {

  private _groupFromQuery = null;

  public today = new Date();
  form: FormGroup;
  constructor(public eventService: EventService, private route: ActivatedRoute) {



  }

  ngOnInit() {

    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['g']) {
        this._groupFromQuery = +queryParams['g'];
      }
    });


    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      type: new FormControl(this._groupFromQuery, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
    });

  }



  onSubmit() {
    const formData = this.form.value;
    this.eventService.calendarEvent = new CalendarEvent();
    this.eventService.calendarEvent.title = formData.title;
    this.eventService.calendarEvent.deadline = formData.date;
    this.eventService.calendarEvent.type = formData.type;
    this.eventService.calendarEvent.notes = formData.notes;

  }
}
