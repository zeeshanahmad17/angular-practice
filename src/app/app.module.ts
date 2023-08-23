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
@NgModule({
  declarations: [
    AppComponent,
    // ---------services practice-----------------
    ServicepComponent,
    NewAccountComponent,
    AccountComponent,

    // ---------services assignment-----------------
    ServicesAssignmentComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [AccountService, LoggingService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
