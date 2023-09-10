import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServicepComponent } from './servicesPractice/servicep.component';
import { NewAccountComponent } from './servicesPractice/new-account/new-account.component';
import { AccountComponent } from './servicesPractice/account/account.component';
import { AccountService } from './servicesPractice/services/account.service';
import { LoggingService } from './servicesPractice/services/logging.service';
import { ServicesAssignmentComponent } from './servicesPractice/servicesAssignment/servicesAssignment.component';
import { ActiveUsersComponent } from './servicesPractice/servicesAssignment/active-users/active-users.component';
import { InactiveUsersComponent } from './servicesPractice/servicesAssignment/inactive-users/inactive-users.component';
import { UserService } from './servicesPractice/servicesAssignment/services/users.service';
import { CounterService } from './servicesPractice/servicesAssignment/services/counter.service';
import { RoutingPracticeComponent } from './routingPractice/routingPractice.component';
import { HomeComponent } from './routingPractice/home/home.component';
import { UsersComponent } from './routingPractice/users/users.component';
import { ServersComponent } from './routingPractice/servers/servers.component';
import { UserComponent } from './routingPractice/users/user/user.component';
import { EditServerComponent } from './routingPractice/servers/edit-server/edit-server.component';
import { ServerComponent } from './routingPractice/servers/server/server.component';
import { ServersService } from './routingPractice/servers/servers.service';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './routingPractice/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    // ---------services practice-----------------
    ServicepComponent,
    NewAccountComponent,
    AccountComponent,

    // ---------services assignment---------------
    ServicesAssignmentComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    // ---------routing practice------------------
    RoutingPracticeComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    AccountService,
    LoggingService,
    UserService,
    CounterService,
    ServersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
