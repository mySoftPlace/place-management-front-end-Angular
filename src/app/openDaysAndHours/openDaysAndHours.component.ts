import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-et',
  templateUrl: './openDaysAndHours.component.html',
  styleUrls: ['./openDaysAndHours.component.css']
})
export class OpenDaysAndHoursComponent implements OnInit {

  listPlaces;
  listOpenDays;
  currentFormation={id:-1};

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/places")
      .subscribe( data=>{
      this.listPlaces=data;
    },err=>{
        console.log(err);
    });
  }

  onGetListDaysAndHoursByPlace(p) {
    console.log(p);
    this.currentFormation = p;
  this.httpClient.get("http://localhost:8080/places/"+p.id+"/openDays")
    .subscribe(data=>{
      this.listOpenDays = data;
    }, err=>{
      console.log(err);
    });
  }

}
