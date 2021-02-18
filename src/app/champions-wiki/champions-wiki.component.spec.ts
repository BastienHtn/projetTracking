import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsWikiComponent } from './champions-wiki.component';

describe('ChampionsWikiComponent', () => {
  let component: ChampionsWikiComponent;
  let fixture: ComponentFixture<ChampionsWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsWikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
