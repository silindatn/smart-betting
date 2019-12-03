import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { IEvent } from 'src/app/shared/interfaces/event.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { EventComponent } from 'src/app/components/dialog/event/event.component';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'startDate', 'endDate', 'menu'];
  dataSource = new MatTableDataSource<IEvent>([]);
  loading = false;

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

  openDialog(element) {
    const vm = this;
    const dialogRef = vm.dialog.open(EventComponent, {width: '500px', data: element});
    dialogRef.afterClosed().subscribe((event: IEvent) => {
      if (event) {
        vm.getEvents();
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEvents() {
    const vm = this;
    vm.loading = true;
    vm.apiServ.getEvents().subscribe((response: any) => {
      console.log('......', response);
      vm.loading = false;
      vm.dataSource.data = response.data;
    }, (error) => {
      vm.loading = false;
    });
  }

}
