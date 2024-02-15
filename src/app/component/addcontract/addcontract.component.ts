import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from '../../service/contract.service';
import { HotelService } from '../../service/hotel.service';
import { RoomtypeService } from '../../service/roomtype.service';
import swal from 'sweetalert';

interface Hotel {
  hotelId: number;
  hotelName: string;
  location: string;
}

interface RoomType {
  roomId: number;
  roomType: number;
}

@Component({
  selector: 'app-addcontract',
  templateUrl: './addcontract.component.html',
  styleUrls: ['./addcontract.component.css']
})
export class AddcontractComponent implements OnInit {
  postContractForm: FormGroup;
  hotels!: Hotel[];
  roomTypes: RoomType[] = [];
  fieldSets: FormGroup[] = [];
  toggleClicked = false;

  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService,
    private roomtypeService: RoomtypeService,
    private contractService: ContractService
  ) {
    this.postContractForm = this.fb.group({
      hotelId: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      markupRate: [null, [Validators.required, Validators.min(0)]],
      contractWithRoomType: this.fb.array([])
    });
    
  }

  ngOnInit() {
    this.hotelService.getAllHotel().subscribe((hotels: any[]) => {
      this.hotels = hotels;
    });

    // this.roomtypeService.getAllRoomtype().subscribe((roomTypes: RoomType[]) => {
    //   this.roomTypes = roomTypes;
    // });

    this.postContractForm.get('hotelId')?.valueChanges.subscribe((selectedHotelId) => {   //selected hotelId is passd into the selectedHotelId
      this.roomtypeService.getRoomTypesByHotelId(selectedHotelId).subscribe((roomTypes: RoomType[]) => {
        this.roomTypes = roomTypes;
      });
    });
  }


  postContract() {

    const currentDate = new Date();
    const startDate = new Date(this.postContractForm.get('startDate')?.value);
    const endDate = new Date(this.postContractForm.get('endDate')?.value);

    if (startDate <= currentDate) {
      swal('Invalid Start Date', 'Start date must be greater than today\'s date', 'error');
      return;
    }

    if (endDate <= startDate) {
      swal('Invalid End Date', 'End date must be greater than the start date', 'error');
      return;
    }


    if (this.postContractForm.valid) {
      swal("Success!", "Contract created successfully", "success");
      console.log(this.postContractForm.value);
      this.contractService.postContract(this.postContractForm.value).subscribe(
        (res: any) => {
          console.log(res);
        })
    }
    else {
      swal("Incorrect!", "Please enter valid data", "error");
   } 
  }

  //FormGroup for the additional fieldset
  toggleAdditionalFields() {
    this.toggleClicked = true;
    const newFieldSet = this.fb.group({
      roomType: [null, [Validators.required]],
      noOfRooms: [null, [Validators.required,, Validators.min(1)]],
      noOfAdults: [null, [Validators.required,, Validators.min(1)]],
      price: [null, [Validators.required,, Validators.min(1)]]
    });

    //Add the new fieldset FormGroup to the fieldSets array
    this.fieldSets.push(newFieldSet);
    //Add the new fieldset FormGroup to the 'contractWithRoomType' form array
    (this.postContractForm.get('contractWithRoomType') as any).push(newFieldSet);
  }
}
