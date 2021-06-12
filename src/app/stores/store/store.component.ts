import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../shared/store.service';
import{NotificationService}from'../../shared/notification.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(public service: StoreService,private notificationService: NotificationService ,public dialogRef:MatDialogRef<StoreComponent>) { }

  ngOnInit(): void {
    this.service.getStores();

  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();

  }
  onSubmit() {
    if(this.service.form.value){
      console.log("this function started");
    this.service.insertStore(this.service.form.value);}
    else{
      console.log("update function started");
      this.service.updateStore(this.service.form.value);
    }
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success("Submitted Successfully");
    this.onClose();
  }

      onClose(){
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.dialogRef.close();
    
    
  }

}
