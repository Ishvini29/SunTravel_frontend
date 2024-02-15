import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASIC_URL="http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http:HttpClient) { }
  postContract(contracts:any):Observable<any>{
    return this.http.post(BASIC_URL+"/contracts",contracts);
  }


  getAllContract():Observable<any>{
    return this.http.get(BASIC_URL+"/contracts");
  }

   // search contracts based on the provided data
   searchContracts(checkInDate: string, numberOfNights: number, conditions: any): Observable<any> {
    const queryParams = `?checkInDate=${checkInDate}&numberOfNights=${numberOfNights}`;
    return this.http.post<any>(BASIC_URL+"/contractWithRoomType/filter" + queryParams, conditions);
  }
}

