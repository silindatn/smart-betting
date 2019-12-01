import { Injectable } from '@angular/core';
import { HttpHelperService } from './http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpHelperService) { }

  createEvent(data) {
    return this.http.post('events', data);
  }

  getEvent(id) {
    return this.http.get('events', id);
  }

  deleteEvent(id) {
    return this.http.delete('events', id);
  }

  updateEvent(data) {
    return this.http.put('events', data);
  }

  getEvents() {
    return this.http.get('events');
  }
}
