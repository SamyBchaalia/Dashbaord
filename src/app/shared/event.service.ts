import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  eventList!: any;
  
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    eventName: new FormControl('', Validators.required),
    eventLocation: new FormControl('', Validators.required),
    eventPrice: new FormControl(''),
    eventimg: new  FormControl(null),
  });
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      eventName: '',
      eventLocation: '',
      eventPrice:'',
      eventimg: '',
    });
  }
  getEvents() {
    return this.http.get("http://localhost:8080/api/events");
   }
  insertEvent(event:any) {
    var EventInsert={ eventName: event.eventName,
      eventLocation: event.eventLocation,
       eventPrice: event.eventPrice,
       eventimg: event.eventimg,} ;
    this.http.post(`http://localhost:8080/api/event`,EventInsert,{responseType: "text",}).subscribe((data)=>{
    console.log(data);
  });
      
     
    
  }
  updateEvent(event:any) {
    var EventInsert={ eventName: event.eventName,
      eventLocation: event.eventLocation,
       eventPrice: event.eventPrice,
       eventimg: event.eventimg,} ;
    this.http.put(`http://localhost:8080/api/event/`+event.id,EventInsert,{responseType: "text",}).subscribe((data)=>{
    console.log(data);
  });
  }
  deleteEvent($key: string) {
    this.http.delete(`http://localhost:8080/api/event/`+$key,{responseType: "text",}).subscribe((data)=>{
    console.log(data);
  });
  }
  complete(event:any){
    this.form.setValue({
    $key:event.id,
    eventName: event.eventName,
    eventLocation: event.eventLocation,
     eventPrice: event.eventPrice,
     eventimg: event.eventimg,
  });
  
  }
  
}
