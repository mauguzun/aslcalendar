import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { OptionService } from 'src/app/option.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.less']
})
export class EventComponent implements OnInit {

  public start: string = null;
  public end: string = null;
  private quarterHours = ['00', '15', '30', '45'];
  public times = [];

  constructor(private service: OptionService, private matDialogRef: MatDialogRef<EventComponent>, private snackBar: MatSnackBar) {
    this.start = moment(service.start).format('HH:mm');
    this.end = moment(service.end).format('HH:mm');
  }

  ngOnInit() {

    let step = 0;
    for (let i = 8; i < 18; i++) {
      for (let j = 0; j < 4; j++) {
        let time = i + ':' + this.quarterHours[j];
        if (i < 10) {
          time = '0' + time;
        }
        this.times.push({ id: step, time });
        step++;
      }
    }
  }

  delete() {
    this.service.start = null;
    this.service.end = null;
    this.matDialogRef.close();
  }

  save() {

    if (this.times.find(x => x.time === this.start).id >= this.times.find(x => x.time === this.end).id) {
      this.snackBar.open('Start time must be greater  !', null, { duration: 2000 })
      return;
    } else {
      this.service.start = this.convert(this.service.start, this.start);
      this.service.end = this.convert(this.service.end, this.end);
      this.matDialogRef.close();
    }


  }

  convert(date: Date, time: string): Date {
    const start = moment(date);
    const timeStart = time.split(':');
    start.set({ h: +timeStart[0], m: +timeStart[1] });
    return start.toDate();
  }
}
