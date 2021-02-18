import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsInfosComponent } from './champions-infos.component';

describe('ChampionsInfosComponent', () => {
  let component: ChampionsInfosComponent;
  let fixture: ComponentFixture<ChampionsInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
