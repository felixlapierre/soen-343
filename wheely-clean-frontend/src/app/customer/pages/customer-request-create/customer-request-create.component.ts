import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-request-create',
  templateUrl: './customer-request-create.component.html',
  styleUrls: ['./customer-request-create.component.scss']
})
export class CustomerRequestCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeCreateRequest(){
    this.router.navigate(['/customer']);
  }

}
