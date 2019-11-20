import { Component, OnInit, Input, Output } from '@angular/core';
import { WashRequest, WashStatus } from 'src/app/core/models/wash-request';
import { MatDialog } from '@angular/material/dialog';
import { AssignWashDialogComponent } from '../assign-wash-dialog/assign-wash-dialog.component';
import { Cleaner } from 'src/app/core/models/cleaner';
import { RequestHttpClientService } from 'src/app/core/services/request-http-client.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-list-item',
  templateUrl: './admin-list-item.component.html',
  styleUrls: ['./admin-list-item.component.scss']
})
export class AdminListItemComponent implements OnInit {

  @Input() request: WashRequest;
  color: string;
  icon: string;
  time: string;
  cleanerName: string;
  @Input() cleanerList: Array<Cleaner>;
  @Output() updateWash = new EventEmitter();

  constructor(public dialog: MatDialog, private requestService: RequestHttpClientService) { }

  ngOnInit() {
    this.generateIconName();
    this.findCleanerName();
    // this.time = this.request.time.toTimeString().substring(0, 9);
  }

  generateIconName() {
    if (this.request.status === 'accepted') {
      this.icon = 'thumb_up';
      this.color = 'pink';
    }
    if (this.request.status === 'pending') {
      this.icon = 'access_time';
      this.color = 'grey';
    }
    if (this.request.status === 'enRoute') {
      this.icon = 'directions_car';
      this.color = 'black';
    }
    if (this.request.status === 'inProgress') {
      this.icon = 'local_car_wash';
      this.color = 'blue';
    }
    if (this.request.status === 'cancelled') {
      this.icon = 'cancel';
      this.color = 'red';
    }
    if (this.request.status === 'completed') {
      this.icon = 'check_circle';
      this.color = 'green';
    }
  }
  findCleanerName() {
    if(this.request.cleanerAccountId !== null){
      for(let i = 0; i < this.cleanerList.length; i++) {
        if(this.cleanerList[i].id === this.request.cleanerAccountId){
          this.cleanerName = this.cleanerList[i].name;
        }
      }
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(AssignWashDialogComponent, {
      width: '250px',
      data: {list: this.cleanerList}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.request.cleanerAccountId = result.id;
      this.request.status = WashStatus.accepted;
      this.updateWash.emit(this.request);
    });
  }

}
