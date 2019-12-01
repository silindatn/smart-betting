import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEvent } from 'src/app/shared/interfaces/event.interface';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  title = '';
  event: IEvent = {
    descrition: '',
    endDate: '',
    name: '',
    startDate: '',
    id: ''
  };

  constructor(
    public dialogRef: MatDialogRef<EventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if (this.data) {
        this.title = 'Edit Event';
      } else {
        this.title = 'Add Event';
      }
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
