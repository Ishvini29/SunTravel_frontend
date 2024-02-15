import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './component/hotel/hotel.component';
import { ContractComponent } from './component/contract/contract.component';
import { RoomtypeComponent } from './component/roomtype/roomtype.component';
import { ContentcardComponent } from './component/contentcard/contentcard.component';
import { HomeComponent } from './component/home/home.component';
import { AddhotelComponent } from './component/addhotel/addhotel.component';
import { AddcontractComponent } from './component/addcontract/addcontract.component';
import { AddroomtypeComponent } from './component/addroomtype/addroomtype.component';
import { SearchComponent } from './component/search/search.component';
import { SearchresultComponent } from './component/searchresult/searchresult.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'contract', component: ContractComponent},
  { path: 'roomtype', component: RoomtypeComponent},
  { path: 'menu', component: ContentcardComponent },
  { path: 'addhotel', component: AddhotelComponent },
  { path: 'addcontract', component: AddcontractComponent },
  { path: 'addroomtype', component: AddroomtypeComponent },
  { path: 'searchroomtype', component: SearchComponent },
  { path: 'searchresult', component: SearchresultComponent },
  {path: 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
