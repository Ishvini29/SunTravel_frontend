import { Component, OnInit } from '@angular/core';
import { RoomtypeService } from '../../service/roomtype.service';
import { HotelService } from '../../service/hotel.service';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import swal from 'sweetalert';

interface Hotel {
  hotelId: number;
  hotelName: string;
  location: string;
}

@Component({
  selector: 'app-addroomtype',
  templateUrl: './addroomtype.component.html',
  styleUrl: './addroomtype.component.css'
})
export class AddroomtypeComponent implements OnInit {
  postRoomtypeForm:FormGroup;
  hotels!: Hotel[];
  constructor(private fb: FormBuilder, private hotelService: HotelService, private roomtypeService: RoomtypeService){
    this.postRoomtypeForm=this.fb.group({
      hotelId: [null, [Validators.required]],
      roomType:[null,[Validators.required,this.capitalizeValidator]]
      
    })
  }

  capitalizeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;

    if (value && typeof value === 'string' && /^[A-Za-z]+$/.test(value)) {
      const firstLetter = value.charAt(0);
      const restOfString = value.slice(1);

      if (firstLetter === firstLetter.toUpperCase() && restOfString === restOfString.toLowerCase()) {
        return null; // Validation passed
      }
    }
    return { 'capitalAlphabetsOnly': true }; // Validation failed
  }

  ngOnInit() {
    // getAllHotel method is in the hotelService to get all hotels
    this.hotelService.getAllHotel().subscribe((hotels: any[]) => {
      this.hotels = hotels;
    });
  }
  postRoomtype(){
    if (this.postRoomtypeForm.valid) {
      swal("Success!", "Roomtype created successfully", "success");
      console.log(this.postRoomtypeForm.value);
      this.roomtypeService.postRoomtype(this.postRoomtypeForm.value).subscribe((res: any)=>{
        console.log(res);  
      }
        )    
    }
    else {
      swal("Incorrect!", "Please enter valid data", "error");
   }
   }
}
