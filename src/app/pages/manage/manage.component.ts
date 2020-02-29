import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CalendarEvent } from 'src/app/calendar-event.model';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.less']
})
export class ManageComponent implements OnInit {

  public event: CalendarEvent = null;
  public options: [];
  id: string = null;

  public status = null;

  public changeStatus = false;
  public load = true;



  constructor(private apiService: ApiService, public eventService: EventService,
    private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');


    this.apiService.getManage(this.id).subscribe(e => {
      if (e['error'] === null) {

        this.event = e['data']['event'];
        this.options = e['data']['options'];

        this.status = this.event.status;
        this.load = false;
      }
    });

  }

  copy(item){
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    this.snackBar.open("Url copied",null,{duration:1000})
  }

  openPanel(arg) {
    this.changeStatus = true;
  }
  reset() {
    this.changeStatus = false;
    this.status = this.event.status
  }
  save() {

    if (this.status == this.event.status) {
      this.snackBar.open('Same status ', null, { duration: 2000 });
      return;
    }
    this.load = true;
    this.apiService.setStatus(this.id, this.status).subscribe(e => {
      if (e['error'] === null) {
        this.snackBar.open('Stasus changed and  email sended', null, { duration: 2000 });
        this.event.status = this.status;
      } else {
        this.snackBar.open(e['error'], null, { duration: 2000 })
      }
    }, e => {
      this.snackBar.open(e, null, { duration: 2000 })
    }, () => {
      this.load = false
    })
    this.changeStatus = false;
  }

}
