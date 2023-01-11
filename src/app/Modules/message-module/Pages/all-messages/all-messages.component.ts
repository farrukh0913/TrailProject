import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getAllMessages } from 'src/app/Shared/Store/message.actions';
import { showAllMessage } from 'src/app/Shared/Store/message.selectors';
import { ITableDetails } from 'src/app/Shared/common.interface';

@Component({
  selector: 'app-all-message',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.scss']
})

export class AllMessageComponent implements OnInit {

  //#region global declarations

  subscriptions$: Subscription[] = [];
  displayedColumns: string[] = ['Id', 'Name', 'Message', 'Date'];
  rowsData: any[] = [];
  spinnerCheck: boolean = false;
  messageForm = this.formBuilder.group({
    'name': ['', Validators.required],
    'message': ['', [Validators.required]],
  });

  //#endregion

  //#region life Cycle hooks

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getAllMessages());
    this.getAllMessages();
  }

  //#endregion

  //#region fetch messages

  /**
     * Gets Catalog years
     */
  getAllMessages() {
    this.spinnerCheck = true;
    this.subscriptions$.push(
      this.store.pipe(select(showAllMessage)).subscribe((res: ITableDetails[]) => {
        if (res) {
          console.log("response &&&", res)
          const formattedData: ITableDetails[] = res.map((res: ITableDetails) => {
            const data: ITableDetails = {
              id: res.id,
              name: res.name,
              message: res.message ? res.message.replace(/^\s+|\s+$/g, "") : '',
              date: res.date ? new Date(Number(res.date)) : undefined
            }

            return data;
          });

          this.spinnerCheck = false;
          this.rowsData = [...formattedData];
        }
      }));
  }

  //#endregion

  //#region sorting section

  /**
   * sort column data
   * @param sort sort
   */
  sortData(sort: Sort) {
    const data = this.rowsData.slice();
    if (!sort.active || sort.direction === '') {
      this.rowsData = data;
      return;
    }

    this.rowsData = data.sort((a, b) => {
      const isAsc: boolean = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return this.compare(a.id, b.id, isAsc);
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'message': return this.compare(a.message, b.message, isAsc);
        case 'date': return this.compare(a.date, b.date, isAsc);
        default: return 0;
      }
    });
  }

  /**
 * compare elements
 * @param a element 1
 * @param b element 2
 * @param isAsc status (boolean)
 */
  compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  //#endregion

}
