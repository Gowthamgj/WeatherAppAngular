import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import * as _ from 'lodash';
import * as moment from 'moment';
@Injectable()
export class WeatherFetchService {
  summary;
  temperature;
  presdet;
 dayWiseMap;
 dayTileList;
 templist;
 datelist;
 farenheit;

  constructor(private http: Http) {
   this.dayWiseMap = {};
  this.dayTileList = [];
  this.templist = [];
  this.datelist = [];
   }
   getCityDetails(city) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=27d43832d2a4adcb97fcbfa23db130aa`;
    this. http.get(url)
    .subscribe(res => {
      const data = res.json();
      console.log(data);
      this.summary = {
        name: res.json().city.name,
        country: res.json().city.country,
      day: moment(res.json().list[0].dt * 1000).format('dddd'),
        temp: res.json().list[0].weather[0].description,
      };
      this.temperature = Math.round(res.json().list[0].main.temp - 270);
      this.farenheit = Math.round((this.temperature  * .5556) + 32);
     // this.icon=res.json().list[0].weather[0].icon;
      this.presdet = {
          pressure: res.json().list[0].main.pressure,
          humidity: res.json().list[0].main.humidity,
          icon : 'http://openweathermap.org/img/w/' + res.json().list[0].weather[0].icon + '.png',
      };
      this.dayWiseMap = {};
      data.list.forEach(date => {
        // console.log(date);
        const dateValue = new Date(date.dt * 1000);
        const dayNum = dateValue.getDay();
        if (dayNum in this.dayWiseMap) {
          this.dayWiseMap[dayNum].push(date);
        } else {
          this.dayWiseMap[dayNum] = [date];
        }
      });
      // console.log(this.dayWiseMap);
     const sortedMap = _.sortBy(this.dayWiseMap, (value) => {
        let dayOfWeek = new Date(value[0].dt * 1000).getDay();
        let today = new Date().getDay();
        const diff = dayOfWeek - today;
        return diff < 0 ? diff + 7 : diff;
      });
      // console.log(this.dayWiseMap);
      this.dayTileList = [];
    this.dayTileList = _.map( sortedMap, (obj) => {
      const minTemp = _.reduce(obj.map(interval => interval.main.temp_min), (a, b) => a + b) / obj.length;
      const iconId = obj[0].weather[0].icon;
        const icon =  'http://openweathermap.org/img/w/' + iconId + '.png';
      return {
        day: moment(obj[0].dt * 1000).format('ddd'),
        minTemp: Math.round(minTemp - 270),
        maxTemp: Math.round(obj[0].main.temp_max - 270),
        imageURL: icon,
        dayNum: new Date(obj[0].dt * 1000).getDay()
      };

    });
    //  console.log(this.dayTileList);
    this.templist = [];
    this.datelist = [];
    this.dayWiseMap[0].forEach(element => {
      this.templist.push(Math.round(element.main.temp - 270));
      this.datelist.push(moment(element.dt * 1000).format('dddd, h:mm a'));
    });
    });
    
   }
   updateGraphDetails(day){
  
     this.datelist=[];
     this.templist=[];
     this.dayWiseMap[day].forEach(element => {
      this.templist.push(Math.round(element.main.temp-270));
      this.datelist.push(moment(element.dt * 1000).format('dddd, h:mm a'));
      // console.log(this.templist);
     });
   }
   updateSummary(day){
    const dayInfoForDay = this.dayWiseMap[day];
    // console.log(dayInfoForDay);
    this.summary = {
      ...this.summary,
      day: moment(dayInfoForDay[0].dt * 1000).format("dddd"),
      temp: dayInfoForDay[0].weather[0].description
    }
   }
}
