import { Component, OnInit ,Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnChanges {
  @Input('date') firstlist;
  @Input('temp') secondlist;
  chart;
  @Input() cityName;
  ngOnChanges(){
    this.chart = new Chart({
      chart: {
        type: 'area'  
      },
      title: {
        text: 'temperature chart'
      },
      
      xAxis: {
        categories: this.firstlist
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      plotOptions: {
        area: {
          
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: this.cityName,
        data: this.secondlist,
       }]
    });
  }
  
 
  // add point to chart serie 

}
