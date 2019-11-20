import { Component, OnInit } from '@angular/core';
import { WashRequest, WashStatus, WashType } from 'src/app/core/models/wash-request';
import { Router } from '@angular/router';
import { CustomerHttpClientService } from 'src/app/core/services/customer-http-client.service';

@Component({
  selector: 'app-customer-request-list',
  templateUrl: './customer-request-list.component.html',
  styleUrls: ['./customer-request-list.component.scss']
})
export class CustomerRequestListComponent implements OnInit {



  // requestList: Array<WashRequest> = [{
  //   id: '3123123123',
  //   customerAccountId: '3424234234234',
  //   status: WashStatus.accepted,
  //   washType: WashType.bronze,
  //   time: new Date(),
  //   carDetails: {
  //     category: 'Sedan',
  //     color: 'blue',
  //     make: 'Toyota',
  //     model: 'Corolla',
  //     plateNumber: 'HIHIHI'
  //   }
  // },
  // {
  //   id: '3123123123',
  //   customerAccountId: '3424234234234',
  //   status: WashStatus.cancelled,
  //   washType: WashType.bronze,
  //   time: new Date(),
  //   carDetails: {
  //     category: 'Sedan',
  //     color: 'blue',
  //     make: 'Toyota',
  //     model: 'Corolla',
  //     plateNumber: 'HIHIHI'
  //   }
  // },
  // {
  //   id: '3123123123',
  //   customerAccountId: '3424234234234',
  //   status: WashStatus.enRoute,
  //   washType: WashType.bronze,
  //   time: new Date(),
  //   carDetails: {
  //     category: 'Sedan',
  //     color: 'blue',
  //     make: 'Toyota',
  //     model: 'Corolla',
  //     plateNumber: 'HIHIHI'
  //   }
  // }];
requestList: Array<WashRequest>;
  constructor(private router: Router, private customerService: CustomerHttpClientService) { }

  ngOnInit() {
    this.getRequests();
  }

  openCreateRequest(){
    this.router.navigate(['/create-request']);
  }
  getRequests(){
    this.customerService.getCustomerRequests('3').subscribe((res) => {
      this.requestList = res;
      console.log(this.requestList);
      
    });
  }

}
