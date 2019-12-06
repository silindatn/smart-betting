import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as moment from 'moment';

import { IEvent } from 'src/app/shared/interfaces/event.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  title = '';
  today = new Date();
  startTime = {hour: this.today.getHours(), minute: this.today.getMinutes()};
  endTime = {hour: this.today.getHours(), minute: this.today.getMinutes()};
  event: IEvent = {
    description: '',
    endDate: new Date(),
    name: '',
    startDate: new Date()
  };
  loading = false;
  isEdit = false;

  constructor(
    public dialogRef: MatDialogRef<EventComponent>,
    private apiServ: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: IEvent) {
      if (this.data && this.data.name) {
        this.event = this.data;
        this.isEdit = true;
        this.startTime = {hour: new Date(this.data.startDate).getHours(), minute: new Date(this.data.startDate).getMinutes()};
        this.endTime = {hour: new Date(this.data.endDate).getHours(), minute: new Date(this.data.endDate).getMinutes()};
        this.title = 'Edit Event';
      } else {
        this.title = 'Add Event';
      }
    }

  ngOnInit() {
  }

  myFilter = (d: Date): boolean => {
    return moment(d).isSameOrAfter(this.event.startDate);
  }

  myFilterStart = (d: Date): boolean => {
    return moment(d).isSameOrAfter(this.today);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.loading = true;
    this.event.startDate =
      new Date(moment(this.event.startDate).format('YYYY/MM/DD') + ' ' + this.startTime.hour + ':' + this.startTime.minute + ':00');
    this.event.endDate =
      new Date(moment(this.event.endDate).format('YYYY/MM/DD') + ' ' + this.endTime.hour + ':' + this.endTime.minute + ':00');
    const vm = this;
    if (vm.isEdit) {
      vm.apiServ.updateEvent(this.event).subscribe((res: any) => {
        vm.loading = false;
        vm.dialogRef.close(res.data);
      }, (error) => {
        vm.loading = false;
      });
    } else {
    vm.apiServ.createEvent(this.event).subscribe((res: any) => {
      vm.loading = false;
      vm.dialogRef.close(res.data);
    }, (error) => {
      vm.loading = false;
    });
  }
  }

}
