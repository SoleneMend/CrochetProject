import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stitches } from './stitches';

describe('Stitches', () => {
  let component: Stitches;
  let fixture: ComponentFixture<Stitches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stitches],
    }).compileComponents();

    fixture = TestBed.createComponent(Stitches);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
