import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternPage } from './pattern-page';

describe('PatternPage', () => {
  let component: PatternPage;
  let fixture: ComponentFixture<PatternPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PatternPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
