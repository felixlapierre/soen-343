import { Component, OnInit } from '@angular/core';
import { WashRequest, RequestStatus, WashType } from 'src/app/core/models/wash-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-request-list',
  templateUrl: './customer-request-list.component.html',
  styleUrls: ['./customer-request-list.component.scss']
})
export class CustomerRequestListComponent implements OnInit {

  requestList: Array<WashRequest> = [{
    id: '3123123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.accepted,
    washType: WashType.bronze,
    time: new Date(),
    carDetails: {
      category: 'Sedan',
      color: 'blue',
      make: 'Toyota',
      model: 'Corolla',
      plateNumber: 'HIHIHI'
    }
  },
  {
    id: '3123123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.cancelled,
    washType: WashType.bronze,
    time: new Date(),
    carDetails: {
      category: 'Sedan',
      color: 'blue',
      make: 'Toyota',
      model: 'Corolla',
      plateNumber: 'HIHIHI'
    }
  },
  {
    id: '3123123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.enRoute,
    washType: WashType.bronze,
    time: new Date(),
    carDetails: {
      category: 'Sedan',
      color: 'blue',
      make: 'Toyota',
      model: 'Corolla',
      plateNumber: 'HIHIHI'
    }
  }];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openCreateRequest(){
    this.router.navigate(['/create-request']);
  }

}
