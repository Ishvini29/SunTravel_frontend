import { Component } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import swal from 'sweetalert';


@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrl: './addhotel.component.css'
})
export class AddhotelComponent {
  postHotelForm:FormGroup;  //declare a FormGroup named as postHotelForm
  constructor(private hotelService:HotelService,private fb:FormBuilder){
    this.postHotelForm=this.fb.group({
      hotelName:[null,[Validators.required,this.capitalizeValidator]],
      location:[null,[Validators.required,this.capitalizeValidator]]
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

postHotel(){
  if (this.postHotelForm.valid) {
    swal("Success!", "Hotel created successfully", "success");
    console.log(this.postHotelForm.value);
    this.hotelService.postHotel(this.postHotelForm.value).subscribe((res: any)=>{
      console.log(res);  
    },
    (error) => {
      if (error.status === 400 && error.error) {
        // If error status is 400 and error object exists
        const errorMap = error.error;
        let errorMessage = "";
        for (const key in errorMap) {
          if (errorMap.hasOwnProperty(key)) {
            errorMessage += `${errorMap[key]}\n`;
          }
        }
        swal("Error!", errorMessage, "error");
      }else {
        // Handle other errors
        swal("Error!", "Something went wrong", "error");
      }
    }
      )     
  }
  else {
    swal("Incorrect!", "Please enter valid data", "error");
  }
  }
}
