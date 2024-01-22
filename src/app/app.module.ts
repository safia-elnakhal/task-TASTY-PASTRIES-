import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { TastyHomeComponent } from './tasty-home/tasty-home.component';
import { TastyWorkComponent } from './tasty-work/tasty-work.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TestymonialsComponent } from './testymonials/testymonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { ContactButtonComponent } from './contact-button/contact-button.component';



@NgModule({
  declarations: [
    AppComponent,
    TastyHomeComponent,
    TastyWorkComponent,
    AboutUsComponent,
    RecipesComponent,
    TestymonialsComponent,
    ContactUsComponent,
    FooterComponent,
    ContactButtonComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,

    

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
