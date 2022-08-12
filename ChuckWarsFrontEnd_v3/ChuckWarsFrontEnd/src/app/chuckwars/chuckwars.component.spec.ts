import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckwarsComponent } from './chuckwars.component';

describe('ChuckwarsComponent', () => {
  let component: ChuckwarsComponent;
  let fixture: ComponentFixture<ChuckwarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckwarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuckwarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
