import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';
import { ITableDetails } from './common.interface';

@Injectable({
  providedIn: 'root'
})

export class SharedServiceService implements OnInit {
  // db variable
  dbRef = this.db.list("message-db");

  //#region life cycle hooks

  constructor(private readonly db: AngularFireDatabase) { }

  ngOnInit() { }

  //#endregion

  //#region save and fetch messages

  /**
   * save message
   * @param message message
   */
  saveMessages(message: ITableDetails): Observable<any> {
    this.dbRef.push({ name: message.name, message: message.message, id: message.id, date: message.date })
    return of(this.dbRef || []);
  }

  /**
   * get all messages
   */
  getAllData(): Observable<any> {
    return this.dbRef.valueChanges();
  }

  //#endregion

}
