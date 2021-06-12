import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../../shared/store.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort"
import { MatPaginator } from "@angular/material/paginator";
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { StoreComponent } from '../store/store.component';
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from '../../shared/dialog.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  constructor(public service: StoreService,
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
    displayedColumns: string[] = ['prName','prImg','prPrice','actions'];
  ngOnInit(): void {
    this.service.getStores().subscribe((data)=>{
      this.x=data;
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
    
    onCreate() {
      this.service.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      let dialogref=this.dialog.open(StoreComponent,dialogConfig);
      dialogref.afterClosed().subscribe(()=>{
        this.ngOnInit();
      })    }
    
    onEdit(row: any){
      this.service.complete(row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      let dialogref=this.dialog.open(StoreComponent,dialogConfig);
  dialogref.afterClosed().subscribe(()=>{
    this.ngOnInit();
  })
      
      }
      onDelete($key: any){
        this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
        .afterClosed().subscribe(res =>{
          if(res){
            this.service.deleteStore($key);
            this.notificationService.warn('! Deleted successfully');
            this.ngOnInit();

          }
        });
    }
}
