import { formatNumber } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ChampionStatsComponent } from './champion-stats/champion-stats.component';
import { ChampionsWikiComponent } from './champions-wiki/champions-wiki.component';

const routes: Routes = [
  { path: 'championStats', component: ChampionStatsComponent },
  { path: 'home', component: IndexComponent },
  { path: 'championsInfos', component: ChampionsWikiComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }