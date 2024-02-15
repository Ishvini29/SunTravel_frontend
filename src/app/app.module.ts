import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { ContentcardComponent } from './component/contentcard/contentcard.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { AddhotelComponent } from './component/addhotel/addhotel.component';
import { HomeComponent } from './component/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContractComponent } from './component/contract/contract.component';
import { RoomtypeComponent } from './component/roomtype/roomtype.component';
import { AddcontractComponent } from './component/addcontract/addcontract.component';
import { AddroomtypeComponent } from './component/addroomtype/addroomtype.component';
import { SearchComponent } from './component/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchresultComponent } from './component/searchresult/searchresult.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ContentcardComponent,
    HotelComponent,
    AddhotelComponent,
    HomeComponent,
    ContractComponent,
    RoomtypeComponent,
    AddcontractComponent,
    AddroomtypeComponent,
    SearchComponent,
    SearchresultComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
