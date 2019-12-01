import { Injectable } from '@angular/core';
import { HttpHelperService } from './http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpHelperService) { }

  createEvent(data) {
    return this.http.post('events/', data);
  }
}
