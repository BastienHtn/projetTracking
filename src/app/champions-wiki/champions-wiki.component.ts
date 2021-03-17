import { Component, OnInit } from '@angular/core';
import { LolApi, Constants } from 'twisted';

@Component({
  selector: 'app-champions-wiki',
  templateUrl: './champions-wiki.component.html',
  styleUrls: ['./champions-wiki.component.scss']
})
export class ChampionsWikiComponent implements OnInit {

  constructor() {
    const api = new LolApi()
   }
  

  ngOnInit(): void {
    
  }

  summonerByNameExample () {
    return await api.Summoner.getByName('Hide on bush', Constants.Regions.KOREA)
  }

  

}
