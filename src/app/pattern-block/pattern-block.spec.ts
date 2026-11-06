import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternBlock } from './pattern-block';

describe('PatternBlock', () => {
  let component: PatternBlock;
  let fixture: ComponentFixture<PatternBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(PatternBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
