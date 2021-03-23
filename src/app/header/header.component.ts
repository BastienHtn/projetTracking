import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  summName: string;


  constructor(
    private ActivatedRoute: ActivatedRoute,
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  getSummonerInfos(){
    this.route.navigate(['./summonerStats/' + this.summName]);
  }

}
