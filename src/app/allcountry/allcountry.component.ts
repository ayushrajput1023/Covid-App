import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcountry',
  templateUrl: './allcountry.component.html',
  styleUrls: ['./allcountry.component.css']
})
export class AllcountryComponent implements OnInit {
@Input() allcountrydata:any;
@Input() summarydata:any;
  constructor() { }

  ngOnInit(): void {

  }

}
