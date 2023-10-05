import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatStepperModule} from "@angular/material/stepper";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { HairdressersComponent } from './hairdressers/hairdressers.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    BookingComponent,
    PricelistComponent,
    HairdressersComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
