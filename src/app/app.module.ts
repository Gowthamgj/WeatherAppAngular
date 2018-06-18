import { WeatherFetchService } from './services/weather-fetch.service';
import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CloudiconComponent } from './cloudicon/cloudicon.component';
import { DetailsComponent } from './details/details.component';
import { GraphComponent } from './graph/graph.component';
import { FutureiconsComponent } from './futureicons/futureicons.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CloudiconComponent,
    DetailsComponent,
    GraphComponent,
    FutureiconsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [WeatherFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
