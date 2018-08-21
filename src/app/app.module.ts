import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// Pages
import { UploadComponent } from './upload/upload.component';
import { PrintComponent } from './print/print.component';
import { LogComponent } from './log/log.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NavComponent } from './nav/nav.component';

// Services
import {ApiService} from "./services/api.service";

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    PrintComponent,
    LogComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
