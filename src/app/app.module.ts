import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { CountryComponent } from './country/country.component';
import { AllcountryComponent } from './allcountry/allcountry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

import { FooterComponent } from './footer/footer.component';
import { HelplinesComponent } from './helplines/helplines.component';
import { AboveinfoComponent } from './aboveinfo/aboveinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CountryComponent,
    AllcountryComponent,
    FooterComponent,
    HelplinesComponent,
    AboveinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatStepperModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
