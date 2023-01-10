import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { SaveMessage } from 'src/app/Shared/Store/message.actions';


@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {


  messageForm = this.formBuilder.group({
    'name': ['', Validators.required],
    'message': ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,

    private dialogRef: MatDialogRef<MessageFormComponent>,
    private store: Store

  ) { }

  ngOnInit(): void {
  }

  saveData(){

  }

  onCloseDialog(){
    this.dialogRef.close();
  }
  submit(){

    const messageObject={
      name:this.messageForm.value.name,
      message:this.messageForm.value.message,
      id:Math.floor(1000 + Math.random() * 9000),
      date: Date.now()
    }
    this.dialogRef.close(this.store.dispatch(SaveMessage({messageData:{...messageObject}})));
  }

}
