import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth.service';

import { Bet } from '../models/bet';
import { Leader } from '../models/leader';

import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  private coindeskAPI: string;
  private username: string;
  private bets: Bet[];

  constructor(private authService: AuthService, public http: HttpClient) {
    this.coindeskAPI = 'https://api.coindesk.com/v1/bpi/currentprice/inr.json';
    this.username = this.authService.getUsername();
  }

  getRate() {
    return this.http.get(this.coindeskAPI);
  }

  placeBet(prediction: number, coins: number) {
    return this.http
      .post(environment.apiUrl + '/users/predict', { username: this.username, prediction, coins });
  }

  getWalletBalance() {
    return this.http
      .get(environment.apiUrl + '/users/wallet?username=' + this.authService.getUsername());
  }

  getLeaderBoard() {
    return this.http
      .get(environment.apiUrl + '/users/leaderboard');
  }

  addBet(prediction: number, amount: number): Bet[] {
    const bet: Bet = {
      prediction,
      amount,
      time: new Date().toLocaleTimeString()
    };

    this.bets = <Bet[]>JSON.parse(localStorage.getItem('bets')) || [];
    this.bets.unshift(bet);
    localStorage.setItem('bets', JSON.stringify(this.bets));

    return this.bets;
  }

  getBets(): Bet[] {
    this.bets = <Bet[]>JSON.parse(localStorage.getItem('bets'));
    return this.bets;
  }
}
