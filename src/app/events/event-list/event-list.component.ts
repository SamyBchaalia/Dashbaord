import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../shared/event.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort"
import { MatPaginator } from "@angular/material/paginator";
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { EventComponent } from '../event/event.component';
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from '../../shared/dialog.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(public service: EventService,
    private dialog:MatDialog, 
    private notificationService: NotificationService,
    private dialogService: DialogService) { }
    @ViewChild(MatSort)
    sort!: MatSort;
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    searchKey!: String;
    ListData!: MatTableDataSource<any>;
    displayedColumns: string[] = ['eventName','eventimg','eventLocation','eventPrice','actions'];
    x:any;
  ngOnInit(): void {
          this.service.getEvents().subscribe((data)=>{
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
      this.dialog.open(EventComponent,dialogConfig);
    }
    
    onEdit(row: any){
      this.service.complete(row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      let dialogref=this.dialog.open(EventComponent,dialogConfig);
  dialogref.afterClosed().subscribe(()=>{
    this.ngOnInit();
  })
  
      }
      onDelete($key: any){
        this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
        .afterClosed().subscribe(res =>{
          if(res){
            this.service.deleteEvent($key);
            this.notificationService.warn('! Deleted successfully');
            this.ngOnInit();
          }
        });
    }
}
