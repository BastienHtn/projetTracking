import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RiotApiService } from '../riot-api.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { SummonerDTO } from '../_json/summoner';
import { ChampionMasteryDTO } from '../_json/championMastery';
import { ChampionDTO } from '../_json/champion';
import * as Champions from '../../assets/dataDragon/11.6.1/data/fr_FR/champion.json';

@Component({
  selector: 'app-summoner-stats',
  templateUrl: './summoner-stats.component.html',
  styleUrls: ['./summoner-stats.component.scss']
})
export class SummonerStatsComponent implements OnInit {

  //RIOT REQUESTS RESULTS
  summoner: SummonerDTO;
  masteries: ChampionMasteryDTO;
  firstMasteryObject: ChampionMasteryDTO;
  secondMasteryObject: ChampionMasteryDTO;
  thirdMasteryObject: ChampionMasteryDTO;
  firstChampionObject: ChampionDTO;
  secondChampionObject: ChampionDTO;
  thirdChampionObject: ChampionDTO;
  listChampions = Champions.data;

  //RIOT REQUESTS VALIDATORS
  isSummonerComplete = false;
  isMasteriesComplete = false;

  constructor(
    public route: ActivatedRoute,
    public riotApiService: RiotApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    const summonerName = this.route.snapshot.paramMap.get('summonername');


    this.riotApiService.getSummonerInfos(summonerName).pipe().subscribe(res => 
    {
      if (res) {this.summoner = res};
      this.isSummonerComplete = true;


      this.riotApiService.getSummonerMasteries(this.summoner.id).pipe().subscribe(res =>
        {
          if (res) {this.masteries = res};

          this.getChampMasteries();
        });

    });
  }

  getChampMasteries() {
    this.firstMasteryObject = this.masteries[0];
    this.secondMasteryObject = this.masteries[1];
    this.thirdMasteryObject = this.masteries[2];

    for (var i in this.listChampions){
      if(this.listChampions[i].key == this.firstMasteryObject.championId){
        this.firstChampionObject = this.listChampions[i];
      }else
      if(this.listChampions[i].key == this.secondMasteryObject.championId){
        this.secondChampionObject = this.listChampions[i];
      }else
      if(this.listChampions[i].key == this.thirdMasteryObject.championId){
        this.thirdChampionObject = this.listChampions[i];
      }
    }

    this.isMasteriesComplete = true;
  }
  

}
