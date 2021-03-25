import { formatNumber } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ChampionStatsComponent } from './champion-stats/champion-stats.component';
import { ChampionsInfosComponent } from './champions-infos/champions-infos.component';
import { SummonerStatsComponent } from './summoner-stats/summoner-stats.component';

const routes: Routes = [
  { path: 'championStats', component: ChampionStatsComponent },
  { path: 'home', component: IndexComponent },
  { path: 'championsInfos', component: ChampionsInfosComponent },
  { path: 'summonerStats/:summonername', component: SummonerStatsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }