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
  //#region life cycle hooks

  constructor(private readonly dialog: MatDialog, private router: Router) { }

  ngOnInit(): void { }

  //#endregion

  //#region open dialog model

  openMessageForm() {
    const dialogRef = this.dialog.open(MessageFormComponent, { disableClose: true, width: '300px', height: '300px' });
  }

  //#endregion

}
