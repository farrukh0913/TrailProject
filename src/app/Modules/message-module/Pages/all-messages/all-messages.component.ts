import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
  displayedColumns: string[] = [ 'Id','Name', 'Message','Date'];
  dataSource:any[] = [];
  spinnerCheck: boolean = true;

  messageForm = this.formBuilder.group({
    'name': ['', Validators.required],
    'message': ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,

    // private dialogRef: MatDialogRef<MessageFormComponent>,
    private store: Store

  ) { }

  ngOnInit(): void {
    this.store.dispatch(getAllMessages());


    this.getAllMessages();
  }

  /**
     * Gets Catalog years
     */
  getAllMessages() {
    this.subscriptions$.push(
      this.store.pipe(select(showAllMessage)).subscribe((res:any) => {
            if (res) {
              console.log("response &&&", res)

              const formattedData = res.map((res:any) => {
                let time = res.date; // get your number
                let date = new Date(time);

                let data = {
                  id: res.id,
                  name: res.name,
                  message: res.message.replace(/^\s+|\s+$/g, ""),
                  date: date
                }
                
                this.spinnerCheck = false;
                return data
              });

              this.dataSource = [...formattedData].reverse();
            }
        })
    );
}

  

}
