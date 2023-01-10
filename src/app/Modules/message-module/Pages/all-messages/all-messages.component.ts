import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getAllMessages, SaveMessage } from 'src/app/Shared/Store/message.actions';
import { showAllMessage } from 'src/app/Shared/Store/message.selectors';

@Component({
  selector: 'app-all-message',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.scss']
})

export class AllMessageComponent implements OnInit {
  subscriptions$: Subscription[] = [];
  displayedColumns: string[] = ['Id', 'Name', 'Message', 'Date'];
  dataSource = new MatTableDataSource<any[]>([]);
  rowsData: any[] = [];
  spinnerCheck: boolean = true;
  messageForm = this.formBuilder.group({
    'name': ['', Validators.required],
    'message': ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private store: Store) { }
  @ViewChild('matSort') sort = new MatSort();

  ngOnInit(): void {
    this.store.dispatch(getAllMessages());
    this.getAllMessages();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  /**
     * Gets Catalog years
     */
  getAllMessages() {
    this.subscriptions$.push(
      this.store.pipe(select(showAllMessage)).subscribe((res: any) => {
        if (res) {
          console.log("response &&&", res)

          const formattedData = res.map((res: any) => {
            const time = res.date; // get your number
            const date = new Date(time);

            const data = {
              id: res.id,
              name: res.name,
              message: res.message.replace(/^\s+|\s+$/g, ""),
              date: date
            }

            this.spinnerCheck = false;
            return data
          });

          this.dataSource.data = [...formattedData];
          this.rowsData = [...formattedData];
        }
      }));
  }

  sortData(sort: Sort) {
    const data = this.rowsData.slice();
    if (!sort.active || sort.direction === '') {
      this.rowsData = data;
      return;
    }

    this.rowsData = data.sort((a, b) => {
      const isAsc: boolean = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'message': return compare(a.message, b.message, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: string | number, b:  string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


