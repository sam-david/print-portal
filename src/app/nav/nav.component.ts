import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  printUrl: string;
  toolTemp: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.printUrl = 'http://localhost:3000/printers/ping';

    setInterval(() => {
      this.pingPrinter('lulzbot', this.printUrl);
    }, 2000);
  }

  private pingPrinter(printer: string, printUrl: string) {
    const headerDict = {
      "Content-Type":                   "application/json; charset=utf-8"
    }

    var that = this;

    console.log('pingparent');

    this.apiService.pingPrinter()
      .subscribe(res => {
        console.log('boner',res)
        var currentToolTemp = res.temperature.tool0.actual;
        this.toolTemp = currentToolTemp;
        // this.toolTempHistory.push(currentToolTemp);
        // console.log('history', that.toolTempHistory);
      });
  }

}
