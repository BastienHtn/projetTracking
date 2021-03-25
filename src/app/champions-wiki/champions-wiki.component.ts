import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ChampionDTO } from '../_json/champion';
import * as Champions from '../../assets/dataDragon/11.6.1/data/fr_FR/champion.json';
import { RiotApiService } from '../riot-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { retry } from 'rxjs/operators';
=======
>>>>>>> dc3e64a5045a722470e18d03e616de5962cf6afd

@Component({
  selector: 'app-champions-wiki',
  templateUrl: './champions-wiki.component.html',
  styleUrls: ['./champions-wiki.component.scss']
})
export class ChampionsWikiComponent implements OnInit {
  listChampions = Champions.data;
  arrayListChampions: Array<ChampionDTO> = [];
  isDataObtained: boolean = false;

<<<<<<< HEAD
  constructor(
    public route: ActivatedRoute,
    public riotApiService: RiotApiService,
    public router: Router
  ) {
=======
  constructor() {
>>>>>>> dc3e64a5045a722470e18d03e616de5962cf6afd
   }
  

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

<<<<<<< HEAD
  }

=======
>>>>>>> dc3e64a5045a722470e18d03e616de5962cf6afd
  

}
