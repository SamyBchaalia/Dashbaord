import { Component, OnInit } from '@angular/core';
import {ShopService} from '../../shared/shop.service';
import{NotificationService}from'../../shared/notification.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private storage:AngularFireStorage,public service: ShopService,private notificationService: NotificationService ,public dialogRef:MatDialogRef<ShopComponent>) { }
  image:any = this.service.form.get("storeImage").value;
  selectedimg=null;
  ngOnInit(): void {
    this.service.getShops();
    console.log(this.service.form.value);

  }
  AddImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.image = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedimg = event.target.files[0];

    } else {
      this.selectedimg = null;
      
    }
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();

  }
  onSubmit() {
    document.getElementById('loader').style.display = "block";
    if(this.service.form.get('$key').value===null){
      if(this.selectedimg!==null)
      {
        console.log("upload started")
        let a= new Date();
      let datenow = a.getFullYear() + "|" + a.getMonth() +"|"+ a.getDay() +" At " + a.getHours() +"h :"+ a.getMinutes()+"m :" + a.getSeconds()+"s";

      var pathimg = "/shops/" + datenow + this.service.form.get('storeName').value ;

      const imgref = this.storage.ref(pathimg);
      this.storage
        .upload(pathimg, this.selectedimg)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            imgref.getDownloadURL().subscribe((url) => {            
              this.service.form.patchValue({storeImage:url});
              this.service.insertShop(this.service.form.value);
              this.service.form.reset();
              this.service.initializeFormGroup();
              this.notificationService.success("Submitted Successfully");
              this.onClose();
            });
          })
        )
        .subscribe();
    }
    else{
      alert("Image iS REQUIRED");
      document.getElementById('loader').style.display = "none";
    }
      
   }
    else {
      if(this.selectedimg!==null)
      {
        let a= new Date();
      let datenow = a.getFullYear() + "|" + a.getMonth() +"|"+ a.getDay() +" At " + a.getHours() +"h :"+ a.getMinutes()+"m :" + a.getSeconds()+"s";

      var pathimg = "/shops/" + datenow + this.service.form.get('storeName').value ;

      const imgref = this.storage.ref(pathimg);
      this.storage
        .upload(pathimg, this.selectedimg)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            imgref.getDownloadURL().subscribe((url) => {            
              this.service.form.patchValue({storeImage:url});
              this.service.updateShop(this.service.form.value);
              this.service.form.reset();
              this.service.initializeFormGroup();
              this.notificationService.success("Submitted Successfully");
              this.onClose();
            });
          })
        )
        .subscribe();
    }
    else{
      this.service.updateShop(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success("Submitted Successfully");
      this.onClose();
    }
    }
   
  }

      onClose(){
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.dialogRef.close();
    
    
  }
}
