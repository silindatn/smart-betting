import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './services/auth-guard.service';
import { OrderByPipe } from './utils/order-by.pipe';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { ComponentsModule } from './components/components.module';
import { MAT_DIALOG_DATA } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    DataService,
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
