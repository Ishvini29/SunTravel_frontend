import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrl: './searchresult.component.css'
})
export class SearchresultComponent {
  contracts: any[] = [];
  conditions: any[] = [];
  noOfNights!:number;
  markupPrice:number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.contracts = navigation.extras.state['contracts'];
      this.conditions = navigation.extras.state['conditions'];
      this.noOfNights = navigation.extras.state['noOfNights'];


      console.log('contracts',this.contracts);
      console.log('conditions',this.conditions);
      console.log('noOfNights',this.noOfNights);
    }
  }

  calculatedPriceForContract(contract: any): number {
    let markupPriceNew=0;
    this.conditions.forEach((criteria: any) => {
    contract.contractWithRoomType.forEach((contractForRoomType: any) => {
    
        if (contractForRoomType.room.roomType === criteria.roomType) {
          markupPriceNew +=
            contractForRoomType.price *
            criteria.noOfRooms *
            criteria.noOfAdults *
           (( contract.markupRate+100)/100)*
            this.noOfNights;
        }
      });
    });

    console.log('Total price for contract:', this.markupPrice);
    return markupPriceNew;
  }
}

  

