import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HairdressersComponent} from "./hairdressers/hairdressers.component";
import {PricelistComponent} from "./pricelist/pricelist.component";
import {BookingComponent} from "./booking/booking.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {FaqComponent} from "./faq/faq.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'pricelist', component: PricelistComponent },
  { path: 'hairdressers', component: HairdressersComponent },
  { path: 'faq', component: FaqComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
