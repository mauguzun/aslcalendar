import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { Calendar } from '@fullcalendar/core';
import { MatDialogConfig, MatDialog, MatSnackBar, TransitionCheckState } from '@angular/material';
import { EventComponent } from 'src/app/modal/event/event.component';
import { OptionService } from 'src/app/option.service';
import * as moment from 'moment';
import { EventService } from 'src/app/event.service';
import { CalendarEventOption } from 'src/app/calendar-event.model';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar', { static: true }) calendarComponent: FullCalendarComponent;


  calendarPlugins = [timeGridPlugin, dayGridPlugin, interactionPlugin]; // important!
  calendarApi: Calendar = null;

  events: [] = [];

  public defaultView = 'timeGridWeek';
  public header = { left: 'prev,next ,today', right: 'timeGridWeek,timeGridDay,listWeek' };

  constructor(private snackBar: MatSnackBar,
              private dialog: MatDialog,
              public service: OptionService,
              public eventService: EventService,
              private deviceService: DeviceDetectorService) { }

  ngOnInit() {

    setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 1);

    if (this.deviceService.isMobile()) {
      this.defaultView = 'timeGridDay';
      this.header = { left: 'prev,next', right: '' };

    }
  }

  handleDateClick(arg) { // handler method


    this.service.start = arg.date;
    this.service.end = arg.date;



    if (this.eventService.calendarEvent == null) {
      this.snackBar.open('Please fill form before on first page', null, { duration: 2000 });
      return;
    } else if (arg.end < new Date()) {
      this.snackBar.open('Can`t add option from past', null, { duration: 2000 });
      return;
    } else if (moment(arg.start).format('l') !== moment(arg.end).format('l')) {
      this.snackBar.open('Possible only same date', null, { duration: 2000 });
      return;
    }
    this.addEvent();



  }

  eventClick(arg) {
    if (this.calendarApi === null) {
      this.calendarApi = this.calendarComponent.getApi();
    }


    this.eventService.calendarEvent.options = this.eventService.calendarEvent.options.filter(x => x.id != arg.event.id);
    this.calendarApi.removeAllEvents();
    this.eventService.calendarEvent.options.forEach(element => {
      this.calendarApi.addEvent({
        start: element.start,
        end: element.end,
        id: element.id,

      });
    });

  }

  addEvent() {
    if (this.calendarApi === null) {
      this.calendarApi = this.calendarComponent.getApi();
    }



    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '80%';


    const dialogRef = this.dialog.open(EventComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {


      if (this.service.start && this.service.end) {

        const option = new CalendarEventOption(
          this.service.start,
          this.service.end);



        this.eventService.calendarEvent.options.push(option);

        this.calendarApi.addEvent({
          start: option.start,
          end: option.end,
          id: option.id,
          className: 'pulse z-depth-3',
        });
      }



    });


  }
}
