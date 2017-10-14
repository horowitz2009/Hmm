import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// services
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ProductService } from './product.service';

// components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { TranslatePipe, TranslateService, TRANSLATION_PROVIDERS } from './lang';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 })

  ],
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    KeepHtmlPipe,
    TranslatePipe,
  ],
  providers: [ProductService, TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
