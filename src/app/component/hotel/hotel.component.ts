import { Component, OnInit } from '@angular/core';
// import { AddhotelComponent } from '../addhotel/addhotel.component';
// import { Router } from '@angular/router';
import { HotelService } from '../../service/hotel.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent implements OnInit {
  hotels:any=[];
  filteredHotels: any[] = [];
  uniqueLocations: string[] = [];
  selectedLocation: string = '';

  constructor(private hotelService: HotelService) {}
  ngOnInit(): void {
    this.getAllHotel();
  }

  getAllHotel(){
    this.hotelService.getAllHotel().subscribe((res)=>{
      console.log(res);
      //assign the responses from getAllHotel method into the hotels
      this.hotels=res;
      //get all the unique locations in the hotels and assign that as array in the uniqueLocations.
      this.uniqueLocations = Array.from(new Set(this.hotels.map((hotel: any) => hotel.location))); 
      //call filterHotels method
      this.filterHotels(); 
    })
  }

  filterHotels(): void {
    //filter the hotels for the selected location
    this.filteredHotels = this.selectedLocation
      ? this.hotels.filter((hotel: any) => hotel.location === this.selectedLocation)
      : this.hotels;
  }

  // onLocationChange(): void {
  //   this.filterHotels();
  // }
}
