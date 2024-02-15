import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL="http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }

  postHotel(hotel:any):Observable<any>{
    return this.http.post(BASIC_URL+"/hotels",hotel);
  }
  
  getAllHotel():Observable<any>{
    return this.http.get(BASIC_URL+"/hotels");
  }
}
