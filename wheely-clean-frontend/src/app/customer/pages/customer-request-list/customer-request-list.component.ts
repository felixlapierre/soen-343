import { Component, OnInit } from '@angular/core';
import { WashRequest, RequestStatus, WashType } from 'src/app/core/models/wash-request';
@Component({
  selector: 'app-customer-request-list',
  templateUrl: './customer-request-list.component.html',
  styleUrls: ['./customer-request-list.component.scss']
})
export class CustomerRequestListComponent implements OnInit {

  requestList: Array<WashRequest> = [{
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
  },
  {
    id: '3123123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.CANCELLED,
    washType: WashType.BRONZE,
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
    status: RequestStatus.EN_ROUTE,
    washType: WashType.BRONZE,
    time: new Date(),
    carDetails: {
      category: 'Sedan',
      color: 'blue',
      make: 'Toyota',
      model: 'Corolla',
      plateNumber: 'HIHIHI'
    }
  }];

  constructor() { }

  ngOnInit() {
  }

}
