import { Component, OnInit } from '@angular/core';
import { WashRequest, RequestStatus, WashType } from 'src/app/core/models/wash-request';
import { Cleaner } from 'src/app/core/models/cleaner';
import { HttpHeaders } from '@angular/common/http';
import { AdminHttpClientService } from '../../../core/services/admin-http-client.service';
import { CleanerHttpClientService } from 'src/app/core/services/cleaner-http-client.service';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';


@Component({
  selector: 'app-admin-request-list',
  templateUrl: './admin-request-list.component.html',
  styleUrls: ['./admin-request-list.component.scss']
})
export class AdminRequestListComponent implements OnInit {

  requestList: Array<WashRequest> = [{
    id: '3123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.accepted,
    washType: WashType.gold,
    time: new Date(),
    cleanerAccountId: '234',
    carDetails: {
      category: 'Sedan',
      color: 'blue',
      make: 'Toyota',
      model: 'Corolla',
      plateNumber: 'HIHIHI'
    }
  },
  {
    id: '3123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.cancelled,
    washType: WashType.bronze,
    time: new Date(),
    cleanerAccountId: '234',
    carDetails: {
      category: 'Sedan',
      color: 'blue',
      make: 'Toyota',
      model: 'Corolla',
      plateNumber: 'HIHIHI'
    }
  },
  {
    id: '3123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.enRoute,
    washType: WashType.silver,
    cleanerAccountId: '234',
    time: new Date(),
    carDetails: {
      category: 'Sedan',
      color: 'blue',
      make: 'Toyota',
      model: 'Corolla',
      plateNumber: 'HIHIHI'
    }
  }];
  cleanerList: Array<Cleaner>;
  constructor(private cleanerService: CleanerHttpClientService) { }

  ngOnInit() {
    this.getCleanerList();
  }

  getCleanerList() {
    this.cleanerService.getCleaners().subscribe((res) => {
      console.log(res);
      this.cleanerList = res;
    });
  }

}
