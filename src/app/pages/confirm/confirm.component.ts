import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { ApiService } from '../api.service';
import { CalendarEvent } from 'src/app/calendar-event.model';
import { MatSnackBar } from '@angular/material';
import { Route, Router } from '@angular/router';




@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less']
})
export class ConfirmComponent implements OnInit {


  private _formControlValue: string = '';
  public doLogin = false;

  get formControlValue(): string {
    return this._formControlValue;
  }

  set formControlValue(newName: string) {


    this._formControlValue = newName;
    this.update()
  }
  clearArray = [];
  constructor(
    public eventService: EventService,
    private route: Router,
    private apiService: ApiService,
    private snackBar: MatSnackBar) {

  }

  ngOnInit() {


  }


  findChoices(searchText: string) {
    return ['info@lifa.lv',
      'fbrisedoux@aslairlines.com',
      'rkyrnytskyi@aslairlines.com',
      'schebour@aslairlines.com',
      'dshabalin@lifa.lv',
      'illarion.medvedev@lifa.lv',
       'FDEBIASIO@aslaviationholdings.com'].filter(item =>
        item.toLowerCase().includes(searchText.toLowerCase())
      );

  }

  getChoiceLabel(choice: string) {
    return `${choice} \n`;
  }

  remove(email: string) {
    this.clearArray = this.clearArray.filter(x => x !== email);
    this.formControlValue = this.formControlValue.split(email + '\n').join("");


  }

  update() {
    this.clearArray = Array.from(new Set(this.formControlValue.split('\n')));
    this.clearArray = this.clearArray.filter(col => col);
    this.clearArray.forEach(element => {
      element.trim();
    });
    this.eventService.calendarEvent.emails = this.clearArray;
  }

  save() {
    this.doLogin = true;
    this.apiService.createEvent(this.eventService.calendarEvent).subscribe(e => {



      if (e['error'] === null) {
        const id = this.eventService.calendarEvent.id;
        this.eventService.calendarEvent = new CalendarEvent();
        this._formControlValue = null;
        this.route.navigate(['/manage/' + id]);
      } else {
        this.snackBar.open(e['error'], null, { duration: 2000 });
      }
    },
      err => {
        this.snackBar.open('servers error', null, { duration: 2000 });
      },
      () => {
        this.doLogin = false;
      }
    )
  }

}
