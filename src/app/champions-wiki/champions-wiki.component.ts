import { Component, OnInit } from '@angular/core';
import { ChampionDTO } from '../_json/champion';
import * as Champions from '../../assets/dataDragon/11.6.1/data/fr_FR/champion.json';
import { RiotApiService } from '../riot-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { retry } from 'rxjs/operators';


@Component({
  selector: 'app-champions-wiki',
  templateUrl: './champions-wiki.component.html',
  styleUrls: ['./champions-wiki.component.scss']
})
export class ChampionsWikiComponent implements OnInit {
  listChampions = Champions.data;
  arrayListChampions: Array<ChampionDTO> = [];
  isDataObtained: boolean = false;

  constructor(
    public route: ActivatedRoute,
    public riotApiService: RiotApiService,
    public router: Router
  ) {}
  

  ngOnInit() {
    try{
      for(var i in this.listChampions){
        this.arrayListChampions.push(this.listChampions[i]);
      }
      
      this.isDataObtained = true;
    }catch{
      this.isDataObtained = false;
      console.log("Erreur d'implementation de liste");
    }
  }
  

}
