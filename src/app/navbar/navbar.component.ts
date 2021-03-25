import { Component,  Inject, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { IonIcon } from '../../../node_modules/ionicons/components/ion-icon';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  sideBar = false;
  sideBarHover = false;

  constructor(
    @Inject(DOCUMENT) document,
    public router: Router,
    private readonly location: Location,
    private readonly eRef: ElementRef
    ) { }

  ngOnInit(): void {
  }

  openSideBar(){
    if(this.sideBar == false){
      this.sideBar = true;
    }else{
      this.sideBar = false;
    }
  }

  hoverSideBar(){
    if(this.sideBarHover == false){
      this.sideBarHover = true;
    }else{
      this.sideBarHover = false;
    }
  }

}
