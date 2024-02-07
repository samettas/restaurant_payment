import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenupageComponent } from './menupage/menupage.component';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { OrderdetailsService } from './orderdetails.service';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';

const routes:Routes=[
  {path:"",component: HomeComponent},
  {path:"menu",component: MenuComponent},
  {path:"menupage/:id", component:MenupageComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"payment", component:PaymentComponent},
  {path:"**", redirectTo:"",pathMatch:'full'}

  ]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    RatingComponent,
    SearchComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes) , FormsModule
  ],
  providers: [OrderdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
