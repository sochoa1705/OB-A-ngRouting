import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from './modules/material/material.module';
//import httpClientModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullNamePipe } from './pipes/full-name.pipe';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomCotactPageComponent } from './pages/random-contact-page/random-contact-page.component';
//import mat header row module



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactsPageComponent,
    ContactDetailPageComponent,
    LoginFormComponent,
    FullNamePipe,
    RandomUserComponent,
    RandomCotactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,  //Personalized Module
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
