import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TFormComponent } from './t-form/t-form.component';
import { RFormComponent } from './r-form/r-form.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, PageContainerComponent, HomeComponent, TFormComponent, RFormComponent, PhoneBookComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
