import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry, takeUntil, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { SummonerDTO } from "../app/_json/summoner";
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class RiotApiService {
  private apiKey = "RGAPI-da00f43a-4792-417c-b7da-47f6e1ab0527";
  selectedSummoner;
  results;


  constructor(
      private http: HttpClient,
      private readonly router: Router,
      private readonly route: ActivatedRoute
  ) { }
  
  getSummonerInfos(summonerName): Observable<any>{
    
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
}
