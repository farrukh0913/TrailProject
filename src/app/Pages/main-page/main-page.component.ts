import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToHome(){
    this.router.navigate(["/MainPage"])
  }

  navigateToMessage(){
    this.router.navigate(["/message"])
  }

  navigateToAllMessage(){
    this.router.navigate(["/message/allMessage"])
  }

}
