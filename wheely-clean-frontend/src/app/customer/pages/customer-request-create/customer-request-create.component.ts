import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WashType, WashRequest, WashStatus } from '../../../core/models/wash-request';
import { FdDate } from '@fundamental-ngx/core';
import { RequestHttpClientService } from 'src/app/core/services/request-http-client.service';

@Component({
  selector: 'app-customer-request-create',
  templateUrl: './customer-request-create.component.html',
  styleUrls: ['./customer-request-create.component.scss']
})
export class CustomerRequestCreateComponent implements OnInit {

  request: WashRequest;
  // map info
  defaultLatitude = 45.4963778;
  defaultLongitude = -73.5779553;
  mapType = 'satellite';

  // map marker info
  markerLatitude = null;
  markerLongitude = null;

  // car info
  make: string = null;
  model: string = null;
  color: string = null;
  category: string = null;
  plateNumber: string = null;

  //wash info
  type: WashType = null;
  typeKeys(): Array<string> {
    var keys = Object.values(WashType);
    return keys;
  }
  date = FdDate.getToday();
  time: Object = {
    hour: 12,
    minute: 0,
    second: 0
  };

  constructor(private router: Router, private requestService: RequestHttpClientService) { }

  ngOnInit() {
  }

  closeCreateRequest() {
    this.router.navigate(['/customer']);
  }

  addMarker(lat: number, lng: number) {
    this.markerLatitude = lat;
    this.markerLongitude = lng;
  }

  submit() {
    this.request.carDetails.make = this.make;
    this.request.carDetails.model = this.model;
    this.request.carDetails.color = this.color;
    this.request.carDetails.category = this.category;
    this.request.carDetails.plateNumber = this.plateNumber;
    this.request.carDetails.make = this.make;
    this.request.customerAccountId = '3';
    this.request.status = WashStatus.pending;
    // this.request.time = this.time.toString();
    this.request.location.latitude = this.markerLatitude;
    this.request.location.longitude = this.markerLongitude;

    console.log(this.type);
    console.log(this.date);
    console.log(this.time);

    console.log(this.markerLatitude);
    console.log(this.markerLongitude);
    console.log('submit! needs connection to backend');
  }


}
