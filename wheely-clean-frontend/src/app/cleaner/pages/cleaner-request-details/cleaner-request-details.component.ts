import { Component, OnInit } from '@angular/core';
import { WashRequest } from 'src/app/core/models/wash-request';

@Component({
  selector: 'app-cleaner-request-details',
  templateUrl: './cleaner-request-details.component.html',
  styleUrls: ['./cleaner-request-details.component.scss']
})
export class CleanerRequestDetailsComponent implements OnInit {
  statuses = [{ value: 'inProgress', viewValue: 'In Progress' },
  { value: 'enRoute', viewValue: 'En Route' },
  { value: 'completed', viewValue: 'Completed' }];

  request: WashRequest;

  constructor() { }

  ngOnInit() {
    this.request = window.history.state.request;
    console.log(this.request);



  }

}
