import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private db:AngularFireDatabase) { }


  // saveMessages(data:any){
  //   console.log("data",data)
  //   return of([])
  // } 

  dbRef = this.db.list("message-db");

  saveMessages(obj: any): Observable<any>{
    console.log('message: ', obj);
     
    this.dbRef.push({name: obj.name, message: obj.message})
    return of(this.dbRef)
  }

  getAllData(): Observable<any>{
    return this.dbRef.valueChanges();
  }

}
