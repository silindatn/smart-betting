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

  createMarket(data) {
    return this.http.post('markets', data);
  }

  getMarket(id) {
    return this.http.get('markets', id);
  }

  deleteMarket(id) {
    return this.http.delete('markets', id);
  }

  updateMarket(data) {
    return this.http.put('markets', data);
  }

  getMarkets() {
    return this.http.get('markets');
  }

  getMarketsByEventId(eventId) {
    return this.http.get('markets/by-eventid', eventId);
  }

  createBet(data) {
    return this.http.post('bets', data);
  }

  getBet(id) {
    return this.http.get('bets', id);
  }

  deleteBet(id) {
    return this.http.delete('bets', id);
  }

  updateBet(data) {
    return this.http.put('bets', data);
  }

  getBets() {
    return this.http.get('bets');
  }

  getReport() {
    return this.http.get('bets/report');
  }
}
