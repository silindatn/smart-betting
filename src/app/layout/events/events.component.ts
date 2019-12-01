import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EventComponent } from 'src/app/components/dialog/event/event.component';
import { MatDialog } from '@angular/material';
import { IEvent } from 'src/app/shared/interfaces/event.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'startDate', 'endDate', 'menu'];
  dataSource = new MatTableDataSource<IEvent>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private apiServ: ApiService
  ) {}

  ngOnInit() {
    this.getEvents();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    this.dialog.open(EventComponent, {width: '500px'});
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEvents() {
    const vm = this;
    vm.apiServ.getEvents().subscribe((events: IEvent[]) => {
      vm.dataSource.data = events;
    });
  }

}
