import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { WashRequest, WashStatus, WashType } from 'src/app/core/models/wash-request';
import { CustomerHttpClientService } from 'src/app/core/services/customer-http-client.service';

@Component({
  selector: 'app-customer-wash-details',
  templateUrl: './customer-wash-details.component.html',
  styleUrls: ['./customer-wash-details.component.scss']
})
export class CustomerWashDetailsComponent implements OnInit {

  washId: any;
  private sub: any;

  icon: any;
  color: any;

  request : WashRequest;

  longitude : string = '0';
  latitude : string = '0';
  mapType  = 'satellite';


  constructor(private route: ActivatedRoute, private router: Router, private customerService : CustomerHttpClientService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.washId = params['washId']; // (+) converts string 'id' to a number
       // TODO fetch info for id here
       this.getRequestById(this.washId);
    });

  }

  requestPending(){
    return this.request.status === 'pending';
  }

  generateIconName(request) {
    if (request.status === WashStatus[WashStatus.accepted]) {
      this.icon = 'thumb_up';
      this.color = 'pink';
    }
    if (request.status === 'pending') {
      this.icon = 'access_time';
      this.color = 'grey';
    }
    if (request.status === 'enRoute') {
      this.icon = 'directions_car';
      this.color = 'black';
    }
    if (request.status === 'inProgress') {
      this.icon = 'local_car_wash';
      this.color = 'blue';
    }
    if (request.status === 'cancelled') {
      this.icon = 'cancel';
      this.color = 'red';
    }
    if (request.status === 'completed') {
      this.icon = 'check_circle';
      this.color = 'green';
    }
  }

  getRequestById(requestId: string){
    this.customerService.getCustomerRequestByRequestId(requestId).subscribe((res) => {
      this.request = res;
      this.generateIconName(res);
      this.latitude = res.location.latitude;
      this.longitude = res.location.longitude;
    });
  }

  closeWashDetails(){
    this.router.navigate(['/customer']);
  }

  cancelWash(){
    //TODO send DELETE request
    this.request.status = WashStatus.cancelled;
    this.customerService.putCustomerWashRequestByRequestId(this.request).subscribe((res) => {
      console.log(res);
      this.closeWashDetails();
    })
  }

  printState(){
    console.log(this.color);
    console.log(this.icon);
    console.log(this.request);
    console.log(this.washId);
  }
}