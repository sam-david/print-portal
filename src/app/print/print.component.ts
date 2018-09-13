import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
declare var google: any;
// import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  toolTemp: string;
  bedTemp: string;
  targetBedTemp: string;
  targetToolTemp: string;
  printUrl: string;
  pieChartData: any;
  printerState: string;
  // toolTempHistory: [];


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.printUrl = 'http:///10.0.1.4/api/files';    // this.printUrl = 'http://lulzocto.samdavid.rocks/api/files';
    this.printUrl = 'http://localhost:3000/printers/ping';
    // this.printUrl = 'https://www.google.com/';
    console.log("Print page")
    setInterval(() => {
      this.pingPrinter('lulzbot', this.printUrl);
    }, 2000);
    // Observable.interval(10000)
    // .takeWhile(() => !stopCondition)
    // .subscribe(i => {
    //   console.log('boom')
    //     // This will be called every 10 seconds until `stopCondition` flag is set to true
    // })

    this.pieChartData =  {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ],
      options: {'title': 'Tasks'},
    };



  }

  private drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
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
        var currentBedTemp = res.temperature.bed.actual;
        var targetToolTemp = res.temperature.tool0.target;
        var targetBedTemp = res.temperature.bed.target;
        this.bedTemp = currentBedTemp;
        this.targetToolTemp = targetToolTemp;
        this.targetBedTemp = targetBedTemp;
        // this.toolTempHistory.push(currentToolTemp);
        // console.log('history', that.toolTempHistory);
        this.printerState = res.state.text;
      });
  }
}
