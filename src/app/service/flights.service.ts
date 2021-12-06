import { Injectable } from '@angular/core';
import { Flight } from "../model/flight";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class FlightsService {
  
  // for testing mock data
  private MYFLIGHTS: Flight[] = [
    {"flightNumber" : "FS1298", "origin": "LAX", "destination" : "LHR"},
    {"flightNumber" : "FS1201", "origin": "LAX", "destination" : "LHR"},
  ];

  constructor(private http: HttpClient) { }
  
// get json data for dynamic table example
public getFlightJsonData() {
  return this.http.get<any>('assets/flights.json')
    .toPromise()
    .then(res => <Flight[]>res.data)
    .then(data => { return data; });
  }
  
  // to test with local mock data
  public getFlightsMockData() : Flight[]{
    return this.MYFLIGHTS;
  }

  // use this method to get data from backend service to load dynamic data from database
  public getFlightsData() : Observable<Flight[]>{
    let url = "http://localhost:8080/flights";
    return this.http.get<Flight[]>(url);
  }
  
}