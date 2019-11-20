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
    const request: WashRequest = {
      carDetails: {
        category: this.category,
        color: this.color,
        make: this.make,
        model: this.model,
        plateNumber: this.plateNumber
      },
      customerAccountId: '3',
      location: {
        latitude: this.markerLatitude,
        longitude: this.markerLongitude
      },
      status: WashStatus.pending,
      washType: this.type,
      time: new Date()
    };
    console.log(request);
    console.log('submit! needs connection to backend');
  }


}
