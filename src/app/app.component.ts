import { WeatherFetchService } from './services/weather-fetch.service';
import { Component } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor (private service:WeatherFetchService){
    console.log(service.summary);
    console.log("appts")
  }
  days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  location = 'Indira Nagar, Gachibowli, Hyderabad, Telangana';
  
  status;
  cityName = '';
  citypass( ) {
    this.service.getCityDetails(this.cityName);
    this.status = this.service.summary.temp;
    
  }
}
