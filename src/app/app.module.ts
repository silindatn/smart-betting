import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BetFormComponent } from './components/bet-form/bet-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { OrderByPipe } from './utils/order-by.pipe';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    BetFormComponent,
    NavbarComponent,
    SignInComponent,
    LeaderboardComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
