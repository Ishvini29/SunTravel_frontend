import { Component,OnInit } from '@angular/core';
import { RoomtypeService } from '../../service/roomtype.service';

@Component({
  selector: 'app-roomtype',
  templateUrl: './roomtype.component.html',
  styleUrl: './roomtype.component.css'
})
export class RoomtypeComponent implements OnInit{
  rooms:any=[];
  constructor(private roomtypeService: RoomtypeService) {}

  ngOnInit(): void {
    this.getAllRoomtype();
  }

  getAllRoomtype(){
    this.roomtypeService.getAllRoomtype().subscribe((res)=>{
      console.log(res);
      this.rooms=res;  //assign all the responses to the rooms  
      
    })}
}
