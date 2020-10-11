import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConfigService } from './config/config.service';

import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule } from '@angular/forms';

// LOCALE
import { registerLocaleData } from '@angular/common';
import localeEsCL from '@angular/common/locales/es-CL';

registerLocaleData(localeEsCL, 'es-CL');

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductListComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [ConfigService,{ provide: LOCALE_ID, useValue: 'es-CL' }],
  bootstrap: [AppComponent,SearchComponent,
    ProductListComponent]
})
export class AppModule { }
