import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RiotApiService } from '../riot-api.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { SummonerDTO } from '../_json/summoner';

@Component({
  selector: 'app-summoner-stats',
  templateUrl: './summoner-stats.component.html',
  styleUrls: ['./summoner-stats.component.scss']
})
export class SummonerStatsComponent implements OnInit {
  summoner: SummonerDTO;
  protected destroy$: Subject<void> = new Subject<void>();

  constructor(
    public route: ActivatedRoute,
    public riotApiService: RiotApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    const summonerName = this.route.snapshot.paramMap.get('summonername');
    this.riotApiService.getSummonerInfos(summonerName).pipe().subscribe(res => {
      if (res) {this.summoner = res}
    });
  }
  ngAfterViewInit(){
  }
  

}
