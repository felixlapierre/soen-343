import { Component, OnInit, Input } from '@angular/core';
import { WashRequest } from 'src/app/core/models/wash-request';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() request: WashRequest;
  icon: string;
  color: string;
  constructor() { }

  ngOnInit() {
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

}
