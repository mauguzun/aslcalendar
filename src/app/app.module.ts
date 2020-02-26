import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { StartComponent } from './pages/start/start.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

import {
  MatChipsModule,
  MatButtonModule,
  MatListModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatProgressBarModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';
import { BeginFormComponent } from './pages/begin-form/begin-form.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EventComponent } from './modal/event/event.component';
import { StepsComponent } from './pages/steps/steps.component';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { LoginComponent } from './pages/account/login/login.component';
import { ResetComponent } from './pages/account/reset/reset.component';
import { SetPasswordComponent } from './pages/account/set-password/set-password.component';
import { CreateAccountComponent } from './pages/account/create-account/create-account.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { LogoutComponent } from './pages/account/logout/logout.component';


const intProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    StartComponent,
    BeginFormComponent,
    CalendarComponent,
    EventComponent,
    StepsComponent,
    ConfirmComponent,
    LoginComponent,
    ResetComponent,
    SetPasswordComponent,
    CreateAccountComponent,
    LogoutComponent,
  ],
  imports: [
    TextInputAutocompleteModule,
    FullCalendarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule,
    FormsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatChipsModule,
    DeviceDetectorModule.forRoot(),
    HttpClientModule

  ],
  providers: [intProvider],
 // providers: [intProvider],
  bootstrap: [AppComponent],
  entryComponents: [EventComponent]

})
export class AppModule { }
