import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { PrintComponent } from './print/print.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    PrintComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
