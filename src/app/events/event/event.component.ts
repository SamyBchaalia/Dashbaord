import { Component, OnInit } from '@angular/core';
import {EventService} from '../../shared/event.service';
import{NotificationService}from'../../shared/notification.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(public service: EventService,private notificationService: NotificationService ,public dialogRef:MatDialogRef<EventComponent>) { }

  ngOnInit(): void {
    this.service.getEvents();

  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();

  }
  onSubmit() {
    if(this.service.form.value){
      console.log("this function started");
    this.service.insertEvent(this.service.form.value);}
    else{
      console.log("update function started");
      this.service.updateEvent(this.service.form.value);
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
    
    
  }}