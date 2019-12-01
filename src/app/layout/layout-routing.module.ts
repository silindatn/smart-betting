import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { BetsComponent } from './bets/bets.component';
import { EventsComponent } from './events/events.component';
import { MarketsComponent } from './markets/markets.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'bets', pathMatch: 'prefix' },
            { path: 'bets', component: BetsComponent},
            { path: 'events', component: EventsComponent},
            { path: 'markets', component: MarketsComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule { }
