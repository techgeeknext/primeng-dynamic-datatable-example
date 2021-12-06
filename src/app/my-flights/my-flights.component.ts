import { Component, OnInit } from '@angular/core';

import {Flight} from '../model/flight';
import { FlightsService } from 'src/app/service/flights.service';

@Component({
  selector: 'app-my-flights',
  templateUrl: './my-flights.component.html',
  styleUrls: ['./my-flights.component.scss']
})
export class MyFlightsComponent implements OnInit {
  public flights : Flight[] = [];

  public flightCols: any[] = [];

  constructor(private flightService: FlightsService) {}

  ngOnInit() {
    
    this.flightService.getFlightJsonData().
      then(flights => this.flights = flights);

      this.flightCols = [
        { field: 'flightNumber', header: 'Flight' },
        {field: 'origin', header: 'From' },
        { field: 'destination', header: 'To' }      
    ];
    
    // this.flights = this.flightService.getFlightsMockData();
    //this.getFlightsData();
  }

  // get the data from backend service api
  private getFlightsData() {
    this.flightService.getFlightsData().subscribe(data => {
      this.flights = data;
    });
  }
}
