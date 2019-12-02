import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetFormComponent } from './components/bet-form/bet-form.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
  {
    path: 'bet-form',
    component: BetFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'sign-in',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
