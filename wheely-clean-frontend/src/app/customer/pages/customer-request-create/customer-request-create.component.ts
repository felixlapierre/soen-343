import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WashType } from '../../../core/models/wash-request';
import { FdDate } from '@fundamental-ngx/core';

@Component({
  selector: 'app-customer-request-create',
  templateUrl: './customer-request-create.component.html',
  styleUrls: ['./customer-request-create.component.scss']
})
export class CustomerRequestCreateComponent implements OnInit {
  

  //map info
  defaultLatitude : Number = 45.4963778;
  defaultLongitude : Number = -73.5779553;
  mapType : String = 'satellite';

  //map marker info
  markerLatitude : Number = null;
  markerLongitude : Number = null;

  //car info
  make : String = null;
  model : String = null;
  color : String = null;

  //wash info
  type : WashType = null;
  typeKeys() : Array<string> {
    var keys = Object.values(WashType);
    return keys;
  }
  date = FdDate.getToday();
  time : Object = {
    hour: 12,
    minute: 0,
    second: 0
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeCreateRequest(){
    this.router.navigate(['/customer']);
  }

  addMarker(lat: number, lng: number) {
    this.markerLatitude = lat;
    this.markerLongitude = lng;
  }

  submit(){
    console.log(this.make);
    console.log(this.model);
    console.log(this.color);
    console.log(this.type);
    console.log(this.date);
    console.log(this.time);

    console.log(this.markerLatitude);
    console.log(this.markerLongitude);
    console.log('submit! needs connection to backend');
  }


}
