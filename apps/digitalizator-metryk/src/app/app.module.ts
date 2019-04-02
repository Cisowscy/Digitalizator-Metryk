import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

//import { I18NextModule } from 'angular-i18next';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StaticModule } from  './static/static.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

    // i18n
    //I18NextModule.forRoot(),

    // core & shared
    CoreModule,
    SharedModule,
    StaticModule,


    // inne elementy
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
