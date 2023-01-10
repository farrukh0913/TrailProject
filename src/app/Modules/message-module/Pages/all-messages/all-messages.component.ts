import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { getAllMessages, SaveMessage } from 'src/app/Shared/Store/message.actions';


@Component({
  selector: 'app-all-message',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.scss']
})
export class AllMessageComponent implements OnInit {


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
  }

  saveData(){

  }

  onCloseDialog(){
    // this.dialogRef.close();
  }
  submit(){

    console.log("asas",this.messageForm.value )

    const messageObject={
      name:this.messageForm.value.name,
      message:this.messageForm.value.message
    }
    // this.dialogRef.close(this.store.dispatch(SaveMessage({messageData:{...messageObject}})));
  }

}
