import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location = 'Indira Nagar, Gachibowli, Hyderabad, Telangana';
  day = 'Friday';
  status = 'Partly Cloudy';
  cityName = '';
  citypass( ) {
    console.log(this.cityName);
  }
}
