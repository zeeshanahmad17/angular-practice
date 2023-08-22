import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ServicepComponent } from './servicesPractice/servicep.component';
import { NewAccountComponent } from './servicesPractice/new-account/new-account.component';
import { AccountComponent } from './servicesPractice/account/account.component';
@NgModule({
  declarations: [
    AppComponent,
    ServicepComponent,
    NewAccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
