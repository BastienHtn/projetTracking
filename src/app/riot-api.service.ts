import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry, takeUntil, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { SummonerDTO } from "../app/_json/summoner";
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
<<<<<<< HEAD
import { ChampionMasteryDTO } from './_json/championMastery';
import { ChampionDTO } from './_json/champion';
import * as Champions from '../assets/dataDragon/11.6.1/data/fr_FR/champion.json';
import { promise } from 'selenium-webdriver';
=======
>>>>>>> dc3e64a5045a722470e18d03e616de5962cf6afd

@Injectable({
  providedIn: 'root'
})
export class RiotApiService {
<<<<<<< HEAD
  private apiKey = "RGAPI-4c4cb72b-7d6b-4358-ae53-339b4e8b3ae2";

  //GLOBAL SUMMONER SEARCH RESULTS
  summoner: SummonerDTO;
  masteries: ChampionMasteryDTO;
  listChampionsRiotApiService = Champions.data;
  arrayListChampionsRiotApiService: Array<ChampionDTO>;

  //GLOBAL SUMMONER SEARCH RESULTS INDICATORS
  dataSummLoaded: Promise<boolean>;
  dataMasterLoaded: Promise<boolean>;
=======
  private apiKey = "RGAPI-da00f43a-4792-417c-b7da-47f6e1ab0527";
  selectedSummoner;
  results;
>>>>>>> dc3e64a5045a722470e18d03e616de5962cf6afd


  constructor(
      private http: HttpClient,
      private readonly router: Router,
      private readonly route: ActivatedRoute
  ) { }
  
  getSummonerInfos(summonerName): Observable<any>{
<<<<<<< HEAD
    var urlSummonner = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + this.apiKey;
    return this.http.get<any>(urlSummonner, {responseType: 'json'});
  }

  getSummonerMasteries(summonerEncryptedId): Observable<any>{
    var urlSummonnerMasteries = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + summonerEncryptedId + "?api_key=" + this.apiKey;
    return this.http.get<any>(urlSummonnerMasteries, {responseType: 'json'});
  }

  // getAllSummsInfos(summ){
  //   var tempSumm: SummonerDTO;
  //   var tempMaster: ChampionMasteryDTO;

  //   this.getSummonerInfos(summ).pipe().subscribe(summInfos=> {
  //     if (summInfos) {
  //       tempSumm = summInfos;
  //     };
  //   });

  //   this.getSummonerMasteries(tempSumm.id).pipe().subscribe(summMaster =>{
  //     if (summMaster) {
  //       tempMaster = summMaster;
  //     };
  //   });

  //   if(tempSumm.accountId != undefined && tempMaster.summonerId != undefined){
  //     this.summoner = tempSumm;
  //     this.masteries = tempMaster;
  //   }
  // }

  
=======
    
    // this.selectedSummoner = this.http.get<SummonerDTO>(urlSummonnerHeaders, 
    // {
    //   observe: 'body', 
    //   responseType: 'json',
    //   headers: new HttpHeaders({ 
    //     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:86.0) Gecko/20100101 Firefox/86.0",
    //     "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
    //     "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    //     "Origin": "https://developer.riotgames.com",
    //     "X-Riot-Token": "RGAPI-7f10e33d-fdf7-46bf-924a-4424e00140bd"
    //   })
    // });
    var urlSummonnerSimple = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + this.apiKey;
    var urlSummonnerHeaders = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName;

    return this.http.get<any>(urlSummonnerSimple, {responseType: 'json'});
  }
>>>>>>> dc3e64a5045a722470e18d03e616de5962cf6afd
}
