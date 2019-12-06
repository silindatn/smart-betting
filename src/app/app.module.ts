import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { OrderByPipe } from './utils/order-by.pipe';
import { AuthService } from './shared/services/auth.service';
import { DataService } from './shared/services/data.service';
import { ComponentsModule } from './components/components.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from './shared/services/api.service';

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
    ApiService,
    DataService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
