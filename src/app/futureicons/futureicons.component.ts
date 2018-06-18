import { WeatherFetchService } from './../services/weather-fetch.service';
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-futureicons',
  templateUrl: './futureicons.component.html',
  styleUrls: ['./futureicons.component.css']
})
export class FutureiconsComponent implements OnInit {
  @Input() dayTileInfo;
  constructor(private service:WeatherFetchService) { }

  ngOnInit() {
  }
  updategraph(){
    console.log("update")
    console.log(this.dayTileInfo.dayNum)
    this.service.updateGraphDetails(this.dayTileInfo.dayNum);
    this.service.updateSummary(this.dayTileInfo.dayNum);
  }
}
