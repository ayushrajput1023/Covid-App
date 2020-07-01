import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//HTTP parameter using angular
export class AppComponent {
summarydata:any = "Data is Loading";
allcountrydata:any;
indiadata:any;


today: number = Date.now();

constructor(public http:HttpClient){
  this.http.get("https://api.covid19api.com/summary").subscribe((value:any)=>{
    //console.log(value);
    this.summarydata = value.Global;
    this.allcountrydata = value.Countries;

    this.allcountrydata.sort((a,b) => {
      return b.TotalConfirmed - a.TotalConfirmed;
    });      //Sort is array method of javaScript

    this.allcountrydata.forEach(countrylist => {
      //console.log(countrylist);
      if(countrylist.Slug == "india")
      {
        console.log(countrylist);
        this.indiadata = countrylist;
      }
    })

  })



  setInterval(() => {this.today = Date.now()}, 1);
}

  title:string = 'my-app';

}
