import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { DialogService } from 'src/app/shared/dialog.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { ShopService } from 'src/app/shared/shop.service';
import { ShopComponent } from 'src/app/shops/shop/shop.component';

@Component({
  selector: 'app-seller-account',
  templateUrl: './seller-account.component.html',
  styleUrls: ['./seller-account.component.css']
})
export class SellerAccountComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,public service: ShopService,private storage:AngularFireStorage,
    private dialog:MatDialog, 
    private notificationService: NotificationService,
    private dialogService: DialogService) { }
  idSeller=localStorage.getItem("token");
  Shop :any;
  image:any;
  selectedimg=null;
  ngOnInit(): void {
    this.http.get("http://localhost:8080/api/shop/"+this.idSeller).subscribe((data)=>{
      this.Shop=data;
      this.Shop.id=this.idSeller;
      this.service.complete(this.Shop);
      console.log(this.service.form.value);
      this.image=this.Shop.storeImage;
})}
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
    onSubmit(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      dialogConfig.height= "80%";
      let dialogref=this.dialog.open(ShopComponent,dialogConfig);
      dialogref.afterClosed().subscribe(()=>{
        this.http.get("http://localhost:8080/api/shops").subscribe((data)=>{
          console.log("success");
        })
      })
      
      }
  
    
  
    
      
      
    }
  