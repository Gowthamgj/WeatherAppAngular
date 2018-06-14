import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CloudiconComponent } from './cloudicon/cloudicon.component';
import { DetailsComponent } from './details/details.component';
import { GraphComponent } from './graph/graph.component';
import { FutureiconsComponent } from './futureicons/futureicons.component';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
