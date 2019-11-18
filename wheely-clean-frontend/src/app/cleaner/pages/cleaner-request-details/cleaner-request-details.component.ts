import { Component, OnInit } from '@angular/core';
import { WashRequest } from 'src/app/core/models/wash-request';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
    this.request = window.history.state.request;
    console.log(this.request);
    // this.route.params.subscribe(params => console.log(params));



  }
  closeWashDetails(){
    this.router.navigate(['/cleaner']);
  }

}
