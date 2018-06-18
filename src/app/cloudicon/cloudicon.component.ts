import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-cloudicon',
  templateUrl: './cloudicon.component.html',
  styleUrls: ['./cloudicon.component.css']
})
export class CloudiconComponent  {
  @Input() temp;
  @Input() iconimg;
  @Input() farenheit;
  f =false;
  c=true;
 
  faren() {
    this.f=true;
    this.c=false
    // this.temp = Math.ceil(this.temp * .5556 ) + 32;
  }
  celci() { 
    // this.temp = this.temperature;
    this.c=true
    this.f=false;
  }
}
