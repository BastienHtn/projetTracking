import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { ChampionStatsComponent } from './champion-stats/champion-stats.component';
import { ChampionsWinratesComponent } from './champions-winrates/champions-winrates.component';
import { ChampionsWikiComponent } from './champions-wiki/champions-wiki.component';
import { ChampionsInfosComponent } from './champions-infos/champions-infos.component';
import { SummonerStatsComponent } from './summoner-stats/summoner-stats.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    IndexComponent,
    ChampionStatsComponent,
    ChampionsWinratesComponent,
    ChampionsWikiComponent,
    ChampionsInfosComponent,
    SummonerStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
