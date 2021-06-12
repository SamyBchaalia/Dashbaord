import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.http.post("http://localhost:8080/api/login",{email: "sami.benchaaia@sesame.com.tn",password: "123"}).subscribe((data)=>{
      console.log(data);
    });
  }
  authentication(email,password)
  {
    console.log("started")
    this.http.post("http://localhost:8080/api/login",{email: email,password: password}).subscribe((data)=>{
  if(!data[0].id)
  {
    alert("Password and Email not matching Please try again or contact us via 'tynassit.com'");
  }
  else if(data[0].id){
    console.log("authentication successfully id", data[0].id);
    localStorage.setItem("token",data[0].id);
    this.router.navigateByUrl("/seller/myaccount");
    
  }
  });
  }


}
