import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL="http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class RoomtypeService {

  constructor(private http:HttpClient) { }
  postRoomtype(rooms:any):Observable<any>{
    return this.http.post(BASIC_URL+"/rooms",rooms);
  }

  getAllRoomtype():Observable<any>{
    return this.http.get(BASIC_URL+"/rooms");
  }
   
  getRoomTypesByHotelId(hotelId: number): Observable<any[]> {
    return this.http.get<any[]>(`${BASIC_URL}/rooms/hotelId/${hotelId}`);
  }
}
