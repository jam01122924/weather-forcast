import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  public headers: Headers;
  constructor(private _http: Http) {
  }

  public get(url: string, params?: Object) {
    // TODO: add params
    let str = '';
    if (params) {
      str = Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }
		// console.log(str);
    this.setHeader();
    return this._http.get(url + (str.length ? ('?' + str) : ''), { headers: this.headers })
      .map(res => res.json())
      .catch(this.handleError);
  }

  public post(url: string, data: string) {
    this.setHeader();
    this.headers.append('Content-Type', 'application/json');
    return this._http.post(url, data, { headers: this.headers }).map(res => res.json());
  }

  public setHeader() {
    this.headers = new Headers();
    if (!!localStorage.getItem('token')) {
      this.headers.append('x-access-token', localStorage.getItem('token'));
    }
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
