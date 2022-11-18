import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { SectionComponent } from './landingpage/section/section.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MenuCardsComponent } from './landingpage/menu-cards/menu-cards.component';
import { CommonModule } from '@angular/common'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CostumerCardComponent } from './landingpage/costumer-card/costumer-card.component';
import { DeliverypartnerComponent } from './landingpage/deliverypartner/deliverypartner.component';
import { OurMenuComponent } from './landingpage/our-menu/our-menu.component';
import { MenuComponent } from './landingpage/our-menu/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './landingpage/our-menu/menu/carousel/carousel.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionComponent,
    LandingpageComponent,
    MenuCardsComponent, 
    PageNotFoundComponent,
    CostumerCardComponent,
    DeliverypartnerComponent,
    OurMenuComponent,
    MenuComponent,
    CarouselComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    SwiperModule 
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
