import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogConfig, MatSnackBar, MatDialog } from '@angular/material';
import { ViewLoginComponent } from 'src/app/modal/view-login/view-login.component';
import { OptionService } from 'src/app/option.service';
import { EventService } from 'src/app/event.service';
import { ViewLogin, CalendarEvent, CalendarEventOption } from 'src/app/calendar-event.model';
import { ViewLoginService } from 'src/app/view-login.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {

  public id: string = null;
  public loading = false;

  public event: CalendarEvent = null;


  public viewLogin: ViewLogin = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    public viewLoginService: ViewLoginService,
    public service: OptionService,
    public eventService: EventService,
  ) {
    this.viewLogin = this.viewLoginService.getData();
  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.apiService.viewEvent(this.id).subscribe((e) => {
      if (e['error'] === null) {
        this.event = e['data']['event'];
        this.event.options = [];

        e['data']['options'].forEach(option => {
          this.event.options.push(new CalendarEventOption(new Date(option.start), new Date(option.end)));
        });
        //  this.event.options = 

      }
      this.loading = false;
    });


  }
  vote() {
    this.loading = true;
  }
  open() {
    if (!this.viewLogin) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.minWidth = '80%';
      const dialogRef = this.dialog.open(ViewLoginComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => { this.viewLogin = this.viewLoginService.getData(); });
    }

  }
}
