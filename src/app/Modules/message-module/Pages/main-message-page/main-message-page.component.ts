import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { MessageFormComponent } from '../message-form/message-form.component';

@Component({
  selector: 'app-main-message-page',
  templateUrl: './main-message-page.component.html',
  styleUrls: ['./main-message-page.component.scss']
})
export class MainMessagePageComponent implements OnInit {

  constructor(
    private readonly dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openMessageForm(){


    const dialogRef = this.dialog.open(MessageFormComponent, {  });
    dialogRef.afterClosed().pipe(take(1)).subscribe(reasonCode => {

      
      console.log('reasonCode: ', reasonCode);

    })


  }

}
