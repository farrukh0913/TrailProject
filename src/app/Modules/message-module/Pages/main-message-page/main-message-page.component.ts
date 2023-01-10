import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  openMessageForm(){
    const dialogRef = this.dialog.open(MessageFormComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(reasonCode => {
        this.router.navigate(["/message/allMessage"])
      console.log('reasonCode: ', reasonCode);
    })


  }

}
