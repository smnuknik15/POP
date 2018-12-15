import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContentComponent } from './shared/components/content/content.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CoureseComponent } from './courese/courese.component';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { AddcouresComponent } from './admin/addcoures/addcoures.component';
import { AddcustomerComponent } from './admin/addcustomer/addcustomer.component';
import { AddoderComponent } from './admin/addoder/addoder.component';
import { AddpaymentComponent } from './admin/addpayment/addpayment.component';
import { AddhomeComponent } from './admin/addhome/addhome.component';
import { CreateComponent } from './admin/addcoures/addcreate/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    MenuComponent,
    CoureseComponent,
    DetailComponent,
    RegisterComponent,
    AddcouresComponent,
    AddcustomerComponent,
    AddoderComponent,
    AddpaymentComponent,
    AddhomeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
