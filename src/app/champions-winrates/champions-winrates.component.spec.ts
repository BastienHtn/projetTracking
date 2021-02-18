import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsWinratesComponent } from './champions-winrates.component';

describe('ChampionsWinratesComponent', () => {
  let component: ChampionsWinratesComponent;
  let fixture: ComponentFixture<ChampionsWinratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsWinratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsWinratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
