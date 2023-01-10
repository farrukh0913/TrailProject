import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMenuItems } from 'src/app/Shared/common.enum';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  menuItems = EMenuItems;

  constructor( private router: Router ) { }

  ngOnInit(): void { }

  navigateToHome(){
    this.router.navigate(["/home"])
  }

  navigateToMessage(){
    this.router.navigate(["/message"])
  }

  navigateToAllMessage(){
    this.router.navigate(["/message/allMessage"])
  }

}
