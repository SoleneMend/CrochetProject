import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchesBlock } from './stitches-block';

describe('StitchesBlock', () => {
  let component: StitchesBlock;
  let fixture: ComponentFixture<StitchesBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StitchesBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(StitchesBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
