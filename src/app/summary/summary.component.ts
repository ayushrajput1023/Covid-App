import { Component, Input,OnInit } from '@angular/core';    //Input is used to get data from app to summary


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
 @Input() summarydata:any;
  constructor() {}

  ngOnInit():void {
  }

}
