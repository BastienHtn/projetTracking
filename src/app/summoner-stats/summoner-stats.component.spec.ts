import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerStatsComponent } from './summoner-stats.component';

describe('SummonerStatsComponent', () => {
  let component: SummonerStatsComponent;
  let fixture: ComponentFixture<SummonerStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
