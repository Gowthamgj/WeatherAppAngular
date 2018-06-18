import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-cloudicon',
  templateUrl: './cloudicon.component.html',
  styleUrls: ['./cloudicon.component.css']
})
export class CloudiconComponent implements OnInit {
  @Input() temp;
  @Input() iconimg;
  
  constructor() { }

  ngOnInit() {
  }

}
