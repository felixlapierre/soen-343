import { Component, OnInit } from '@angular/core';
import { WashRequest, WashStatus, WashType } from 'src/app/core/models/wash-request';
import { Cleaner } from 'src/app/core/models/cleaner';
import { HttpHeaders } from '@angular/common/http';
import { CleanerHttpClientService } from 'src/app/core/services/cleaner-http-client.service';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { RequestHttpClientService } from 'src/app/core/services/request-http-client.service';


@Component({
  selector: 'app-admin-request-list',
  templateUrl: './admin-request-list.component.html',
  styleUrls: ['./admin-request-list.component.scss']
})
export class AdminRequestListComponent implements OnInit {

  // requestList: Array<WashRequest> = [{
  //   id: '3123123',
  //   customerAccountId: '3424234234234',
  //   status: WashStatus.accepted,
  //   washType: WashType.gold,
  //   time: new Date(),
  //   cleanerAccountId: '234',
  //   carDetails: {
  //     category: 'Sedan',
  //     color: 'blue',
  //     make: 'Toyota',
  //     model: 'Corolla',
  //     plateNumber: 'HIHIHI'
  //   }
  // },
  // {
  //   id: '3123123',
  //   customerAccountId: '3424234234234',
  //   status: WashStatus.cancelled,
  //   washType: WashType.bronze,
  //   time: new Date(),
  //   cleanerAccountId: '234',
  //   carDetails: {
  //     category: 'Sedan',
  //     color: 'blue',
  //     make: 'Toyota',
  //     model: 'Corolla',
  //     plateNumber: 'HIHIHI'
  //   }
  // },
  // {
  //   id: '3123123',
  //   customerAccountId: '3424234234234',
  //   status: WashStatus.enRoute,
  //   washType: WashType.silver,
  //   cleanerAccountId: '234',
  //   time: new Date(),
  //   carDetails: {
  //     category: 'Sedan',
  //     color: 'blue',
  //     make: 'Toyota',
  //     model: 'Corolla',
  //     plateNumber: 'HIHIHI'
  //   }
  // }];
  cleanerList: Array<Cleaner>;
  requestList: Array<WashRequest>;
  constructor(private cleanerService: CleanerHttpClientService, private requestService: RequestHttpClientService) { }

  ngOnInit() {
    this.getCleanerList();
    this.getRequestList();
  }

  getCleanerList() {
    this.cleanerService.getCleaners().subscribe((res) => {
      console.log(res);
      this.cleanerList = res;
    });
  }
  getRequestList(){
    this.requestService.getRequests().subscribe((res) => {
      this.requestList = res;
    });
  }
  updateWash($event: any){
    console.log($event);
    this.requestService.updateRequest($event).subscribe((res) => {
      this.getRequestList();
    });
  }

}
