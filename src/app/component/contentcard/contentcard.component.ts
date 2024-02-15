import { Component } from '@angular/core';
// import { AddhotelComponent } from '../addhotel/addhotel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contentcard',
  templateUrl: './contentcard.component.html',
  styleUrl: './contentcard.component.css'
})
export class ContentcardComponent {
  constructor(private router: Router) {}
  openAddHotelForm() {
    this.router.navigate(['/hotel']);
  }
  
  openAddContractForm() {
    this.router.navigate(['/contract']);
  }

  openAddRoomTypeForm() {
    this.router.navigate(['/roomtype']);
  }

}
