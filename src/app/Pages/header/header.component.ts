import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMenuItems } from 'src/app/Shared/common.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class MainPageComponent implements OnInit {
  menuItems = EMenuItems;

  //#region life cylce hooks

  constructor( private router: Router ) { }

  ngOnInit(): void { }

  //#endregion

  //#region navigations on header item click

  /**
   * navigate to home page
   */
  navigateToHome(){
    this.router.navigate(["/home"])
  }

    /**
   * navigate to message page
   */
  navigateToMessage(){
    this.router.navigate(["/message"])
  }

  //#endregion

}
