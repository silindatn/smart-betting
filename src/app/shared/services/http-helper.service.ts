import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  baseUrl = ' https://my-json-server.typicode.com/silindatn/smart-db/';

  constructor(private http: HttpClient) { }

  put(url, data) {
    return this.http.put(this.baseUrl + url + '/' + data.id, data);
  }

  get(url, id) {
    return this.http.get(this.baseUrl + url + '/' + id);
  }

  delete(url, id) {
    return this.http.delete(this.baseUrl + url + '/' + id);
  }

  post(url, data) {
    return this.http.post(this.baseUrl + url, data);
  }
}
