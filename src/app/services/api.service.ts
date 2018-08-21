import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl: string = 'http://localhost:3000/printers/ping';
  headerDict = {
    "Content-Type":                   "application/json; charset=utf-8"
  }

  constructor(private http: HttpClient) { }

  pingPrinter() {
    console.log('pinging printer')
    return this.http.get(this.apiUrl, {
      headers: this.headerDict,
      method: 'GET',
      mode: 'cors',
      params: {
        printer: 'lulzbot'
      }
    })
    .map(this.extractPingData)
    .catch(this.handleError);
  }


  private extractPingData(res: Response) {
    // let body = res.json();

    // let parsedBody = {
    //   reputationLevel: body.reputation_level,
    //   reputationDetails: body.reputation_details,
    //   volumeScore: body.volume_score,
    //   reportCount: body.report_count,
    //   error: body.error,
    //   warnings: body.warnings
    // }

    // console.log("Phone Rep Data: ", parsedBody)
    // return parsedBody || { };
    return res || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
