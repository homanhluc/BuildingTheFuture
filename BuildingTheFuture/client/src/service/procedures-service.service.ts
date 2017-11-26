import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProceduresServiceService {
  private baseUrl = 'http://localhost:3000';
  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  data: any;
  constructor(private _http: Http) { }

  index() {
    return this._http.get(this.baseUrl + '/all', this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  detail(linkdetail) {
    return this._http.get(this.baseUrl + '/?' + linkdetail, this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER ERROR');
  }
  searchQuery(name) {
    return this.index().forEach(element => {
      if(name === element.title) {
        this.data.push(name);
      }
    });
  }
}
