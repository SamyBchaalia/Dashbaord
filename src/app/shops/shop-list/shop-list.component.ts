import { Component, OnInit, ViewChild } from '@angular/core';
import { ShopService } from '../../shared/shop.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort"
import { MatPaginator } from "@angular/material/paginator";
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { ShopComponent } from '../shop/shop.component';
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from '../../shared/dialog.service';



@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  constructor(public service: ShopService,
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
  displayedColumns: string[] = ['storeImage','storeName','storeLocation','openingHour','storeDescription','actions'];
  ngOnInit() {
    this.service.getShops().subscribe((data)=>{
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
  dialogConfig.height= "80%";

  let dialogref=this.dialog.open(ShopComponent,dialogConfig);
  dialogref.afterClosed().subscribe(()=>{
    this.ngOnInit();
  })
}

onEdit(row: any){
  this.service.complete(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  dialogConfig.height= "80%";
  let dialogref=this.dialog.open(ShopComponent,dialogConfig);
  dialogref.afterClosed().subscribe(()=>{
    this.ngOnInit();
  })
  
  }
  onDelete($key: any){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.service.deleteShop($key);
        this.notificationService.warn('! Deleted successfully');
        this.ngOnInit();
      }
    });
}
}