import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  
  shopList!: any;

  getClients() {
    return this.http.get("http://localhost:8080/api/clients", {responseType: "json"});

   }
   deleteClient($key: string) {
    this.http.delete(`http://localhost:8080/api/client/`+$key,{responseType: "text",}).subscribe((data)=>{
    console.log(data);
  });
  }
}
