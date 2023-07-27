import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';
import { AssignmentFourComponent } from './assignment-four/assignment-four.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    AssignmentFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
