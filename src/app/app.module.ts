import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SplittingCodeComponent } from './splitting-code/splitting-code.component';
import { AddFunctionsComponent } from './splitting-code/add-functions/add-functions.component';
import { ServerElementComponent } from './splitting-code/server-element/server-element.component';
@NgModule({
  declarations: [
    AppComponent,
    SplittingCodeComponent,
    AddFunctionsComponent,
    ServerElementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
