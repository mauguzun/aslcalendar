import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { StartComponent } from './pages/start/start.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EventComponent } from './modal/event/event.component';
import { StepsComponent } from './pages/steps/steps.component';
import { LoginComponent } from './pages/account/login/login.component';
import { CreateAccountComponent } from './pages/account/create-account/create-account.component';
import { ResetComponent } from './pages/account/reset/reset.component';
import { SetPasswordComponent } from './pages/account/set-password/set-password.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './pages/account/logout/logout.component';
import { ViewComponent } from './pages/view/view.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { ManageComponent } from './pages/manage/manage.component';



const routes: Routes = [
  {

    path: '', component: LayoutComponent, children: [
      { path: '', component: StartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'create', component: CreateAccountComponent },
      { path: 'reset', component: ResetComponent },
      { path: 'confirm', component: SetPasswordComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'view/:id', component: ViewComponent },

      { path: 'step', canActivate: [AuthGuard], component: StepsComponent },


      { path: 'events', canActivate: [AuthGuard], component: EventListComponent },
      { path: 'manage/:id', canActivate: [AuthGuard], component: ManageComponent },
    ],

  },



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
