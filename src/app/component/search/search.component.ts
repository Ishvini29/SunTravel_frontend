

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from '../../service/contract.service';
import swal from 'sweetalert';

interface RoomTypeCondition {
  noOfRooms: number;
  roomType: string;
  noOfAdults: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  checkInDate: string = '';
  noOfNights: number =1;
  conditions: RoomTypeCondition[] = [];
  

  constructor(private contractService:ContractService, private router: Router) {}

  addCondition(): void {
    const newCondition: RoomTypeCondition = { roomType: '', noOfAdults: 1, noOfRooms: 1 };
    this.conditions.push(newCondition);
  }

  AlertaddConditions(): void {
    swal('Criteria Not Added', 'Please add search criterias before searching', 'error');
  }

  validateRoomTypes(): boolean {
    // Check if any roomType is empty
    return this.conditions.every((condition) => condition.roomType.trim() !== '');
  }

   validateNumbers(): boolean {
    // Check if noOfRooms and noOfAdults are greater than zero
    return this.conditions.every((condition) => condition.noOfRooms > 0 && condition.noOfAdults > 0);
  }

  searchContract(): void {
    //validate the checkInDate
    const currentDate = new Date();
    const selectedDate = new Date(this.checkInDate);
    if (selectedDate <= currentDate) {
      swal('Invalid checkIn Date', 'Check-in date must be greater than today\'s date', 'error');
      return; // Stop execution if checkin date validation fails
    }

    //validate the noOfNights
    if (this.noOfNights <= 0) {
      swal('Invalid Number of Nights', 'Number of nights must be greater than zero', 'error');
      return; // Stop execution if number of nights validation fails
    }

    // Validate roomType
    if (!this.validateRoomTypes()) {
      swal('Invalid Room Type', 'Please add the RoomType', 'error');
      return; // Stop execution if roomType validation fails
    }

      // Validate noOfRooms or noOfAdults
      if (!this.validateNumbers()) {
        swal('Invalid Numbers', 'Number of rooms and adults must be greater than zero', 'error');
        return; // Stop execution if number validation fails
      }

    // Implement searchContract logic
    const searchData = {
      checkInDate: this.checkInDate,
      noOfNights: this.noOfNights,
      conditions: this.conditions
      
    };
    
    // Call searchContracts method from the service and handle the response
    this.contractService.searchContracts(searchData.checkInDate, searchData.noOfNights, searchData.conditions)
      .subscribe(
        (contracts) => {
          console.log('Contracts found:', contracts);
          this.router.navigate(['/searchresult'], { state: { contracts,conditions:this.conditions,noOfNights:this.noOfNights} });
        },
        (error) => {
          console.error('Error searching contracts:', error);
        }
      );
  }
}