import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { WashRequest, RequestStatus, WashType } from 'src/app/core/models/wash-request';

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

  request = {
    id: '3123123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.ACCEPTED,
    washType: WashType.BRONZE,
    time: new Date(),
    carDetails: {
      category: 'Sedan',
      color: 'blue',
      make: 'Toyota',
      model: 'Corolla',
      plateNumber: 'HIHIHI'
    }
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.washId = params['washId']; // (+) converts string 'id' to a number
       // TODO fetch info for id here
    });

    this.generateIconName();

  }

  generateIconName() {
    if (this.request.status === 'Accepted') {
      this.icon = 'thumb_up';
      this.color = 'pink';
    }
    if (this.request.status === 'Pending') {
      this.icon = 'access_time';
      this.color = 'grey';
    }
    if (this.request.status === 'En Route') {
      this.icon = 'directions_car';
      this.color = 'black';
    }
    if (this.request.status === 'In Progress') {
      this.icon = 'local_car_wash';
      this.color = 'blue';
    }
    if (this.request.status === 'Cancelled') {
      this.icon = 'cancel';
      this.color = 'red';
    }
    if (this.request.status === 'Completed') {
      this.icon = 'check_circle';
      this.color = 'green';
    }
  }

  closeWashDetails(){
    this.router.navigate(['/customer']);
  }

  cancelWash(){
    //TODO send DELETE request
    console.log("TODO send DELETE request to server")
  }

  printState(){
    console.log(this.route);
    console.log(this.washId);
  }
}
