import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry, takeUntil, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { SummonerDTO } from "../app/_json/summoner";
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { ChampionMasteryDTO } from './_json/championMastery';
import { ChampionDTO } from './_json/champion';
import * as Champions from '../assets/dataDragon/11.6.1/data/fr_FR/champion.json';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class RiotApiService {
  private apiKey = "RGAPI-4c4cb72b-7d6b-4358-ae53-339b4e8b3ae2";

  //GLOBAL SUMMONER SEARCH RESULTS
  summoner: SummonerDTO;
  masteries: ChampionMasteryDTO;
  listChampionsRiotApiService = Champions.data;
  arrayListChampionsRiotApiService: Array<ChampionDTO>;

  //GLOBAL SUMMONER SEARCH RESULTS INDICATORS
  dataSummLoaded: Promise<boolean>;
  dataMasterLoaded: Promise<boolean>;


  constructor(
      private http: HttpClient,
      private readonly router: Router,
      private readonly route: ActivatedRoute
  ) { }
  
  getSummonerInfos(summonerName): Observable<any>{
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

  
}
