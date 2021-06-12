import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) { }
  storeList!: any;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    prName: new FormControl('', Validators.required),
    prImg: new FormControl('', Validators.required),
    prPrice: new FormControl(''),
   });

   initializeFormGroup() {
    this.form.setValue({
      $key: null,
      prName: '',
      prImg: '',
      prPrice:'',
    });
  }
  getStores() {
    return this.http.get("http://localhost:8080/api/stores",{responseType: "json"});
   }
  insertStore(store:any) {
    var StoreInsert={
      prName: store.prName,
      prImg: store.prImg,
       prPrice: store.prPrice};
       this.http.post(`http://localhost:8080/api/store`,StoreInsert,{responseType: "text",}).subscribe((data)=>{
       console.log(data);
     });
  }
  updateStore(store:any) {
    var StoreInsert={
      prName: store.prName,
      prImg: store.prImg,
       prPrice: store.prPrice};
       this.http.put(`http://localhost:8080/api/store/`+store.id,StoreInsert,{responseType: "text",}).subscribe((data)=>{
       console.log(data);
     });
  }
  deleteStore($key: string) {
    this.http.delete(`http://localhost:8080/api/store/`+$key,{responseType: "text",}).subscribe((data)=>{
       console.log(data);
      });
  }
  complete(store:any){
    this.form.setValue({
    $key:store.$key,
    prName: store.prName,
     prImg: store.prImg,
      prPrice: store.prPrice,
  });
  
  }
}
