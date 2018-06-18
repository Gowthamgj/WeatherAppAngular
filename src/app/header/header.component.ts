import { WeatherFetchService } from './../services/weather-fetch.service';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() summary;
  @Input() currentday;
  @Input() currentstatus;
  constructor() { 
    // console.log(service.summary);
  }

  ngOnInit() {
  }

}
