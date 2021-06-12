import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort"
import { MatPaginator } from "@angular/material/paginator";
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from '../../shared/dialog.service';
import { ClientService } from 'src/app/shared/client.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(public service: ClientService,
    private dialog:MatDialog, 
    private notificationService: NotificationService,
    private dialogService: DialogService) { }
    @ViewChild(MatSort)
    sort!: MatSort;
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    searchKey!: String;
  x:any;

  ListData!: MatTableDataSource<any>;
  displayedColumns: string[] = ['profilePhoto','clientName','email','point','actions'];
  ngOnInit(): void {
  
  this.service.getClients().subscribe((data)=>{
    this.x=data;

    console.log(this.x);
    this.ListData = new MatTableDataSource(this.x);
    this.ListData.sort = this.sort;
    this.ListData.paginator = this.paginator;
  
      });
}
onSearchClear() {
  this.searchKey = "";
  this.applyFilter();
  }
  
  applyFilter() {
  this.ListData.filter = this.searchKey.trim().toLowerCase();
  }
  onDelete($key: any){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.service.deleteClient($key);
        this.notificationService.warn('! Deleted successfully');
        this.ngOnInit();
      }
    });
}

}
