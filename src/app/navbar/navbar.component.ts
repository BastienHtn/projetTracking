import { Component, OnInit } from '@angular/core';

import { IonIcon } from '../../../node_modules/ionicons/components/ion-icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sideBar = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSideBar(){
    if(this.sideBar == false){
      this.sideBar = true;
    }else{
      this.sideBar = false;
    }
  }

}
