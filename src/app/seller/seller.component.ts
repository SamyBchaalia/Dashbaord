import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private router: Router) { }
  title = 'Tynass Dashboard';
  isExpanded: boolean = true;
  token:any= localStorage.getItem("token");
  ngOnInit(): void {
    console.log(this.token);

  }
  logOut(){
    console.log("started");
    localStorage.removeItem("token");
   console.log( localStorage.getItem("token")===null);

    this.ngOnInit();
  }

}
