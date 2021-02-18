import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionStatsComponent } from './champion-stats.component';

describe('ChampionStatsComponent', () => {
  let component: ChampionStatsComponent;
  let fixture: ComponentFixture<ChampionStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
