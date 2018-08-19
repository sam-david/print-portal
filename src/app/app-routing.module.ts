import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from "./upload/upload.component";
import { PrintComponent } from './print/print.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent,
    pathMatch: 'full'
  },
  {
    path: 'print',
    component: PrintComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'log',
    component: LogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
