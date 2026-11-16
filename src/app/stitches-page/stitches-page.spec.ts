import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchesPage } from './stitches-page';

describe('StitchesPage', () => {
  let component: StitchesPage;
  let fixture: ComponentFixture<StitchesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StitchesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(StitchesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
