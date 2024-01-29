import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
// Forms Imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Routing Imports
import { Routes, RouterModule } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { ServicepComponent } from './servicesPractice/servicep.component';
import { NewAccountComponent } from './servicesPractice/new-account/new-account.component';
import { AccountComponent } from './servicesPractice/account/account.component';
import { ServicesAssignmentComponent } from './servicesPractice/servicesAssignment/servicesAssignment.component';
import { InactiveUsersComponent } from './servicesPractice/servicesAssignment/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './servicesPractice/servicesAssignment/active-users/active-users.component';
import { RoutingPracticeComponent } from './routingPractice/routingPractice.component';
import { HomeComponent } from './routingPractice/home/home.component';
import { UsersComponent } from './routingPractice/users/users.component';
import { ServersComponent } from './routingPractice/servers/servers.component';
import { UserComponent } from './routingPractice/users/user/user.component';
import { EditServerComponent } from './routingPractice/servers/edit-server/edit-server.component';
import { ServerComponent } from './routingPractice/servers/server/server.component';
import { NotFoundComponent } from './routingPractice/not-found/not-found.component';
import { ErrorPageComponent } from './routingPractice/error-page/error-page.component';
import { FormsPracticeComponent } from './forms-practice/forms-practice.component';
import { TdformsAssignmentComponent } from './forms-practice/tdforms-assignment/tdforms-assignment.component';
import { ReactiveFormsComponent } from './forms-practice/reactive-forms/reactive-forms.component';
import { ReactiveFormsAssignmentComponent } from './forms-practice/reactive-forms-assignment/reactive-forms-assignment.component';
import { PipesAssignmentComponent } from './pipes-assignment/pipes-assignment.component';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { EmployeeModule } from './employees/employee.module';
// Services
import { AccountService } from './servicesPractice/services/account.service';
import { LoggingService } from './servicesPractice/services/logging.service';
import { UserService } from './servicesPractice/servicesAssignment/services/users.service';
import { CounterService } from './servicesPractice/servicesAssignment/services/counter.service';
import { ServersService } from './routingPractice/servers/servers.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './routingPractice/servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './routingPractice/servers/server/server-resolver.service';
import { FormsExtraComponent } from './forms-practice/forms-extra/forms-extra.component';
// Pipes
import { ReversePipe } from './pipes-assignment/reverse.pipe';
import { SortPipe } from './pipes-assignment/sort.pipe';
import { ShortenPipe } from './pipes-assignment/shorten.pipe';
import { FilterPipe } from './pipes-assignment/filter.pipe';
import { HttpPracticeComponent } from './http-practice/http-practice.component';
import { HttpClientModule } from '@angular/common/http';

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
    ErrorPageComponent,
    FormsPracticeComponent,
    TdformsAssignmentComponent,
    ReactiveFormsComponent,
    ReactiveFormsAssignmentComponent,
    FormsExtraComponent,
    PipesAssignmentComponent,
    ReversePipe,
    SortPipe,
    ShortenPipe,
    FilterPipe,
    HttpPracticeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EmployeeModule,
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule,
  ],
  providers: [
    AccountService,
    LoggingService,
    UserService,
    CounterService,
    ServersService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    ServerResolver,
    provideNgxMask(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
