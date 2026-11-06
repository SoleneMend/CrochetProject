import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBlock } from './header-block';

describe('HeaderBlock', () => {
  let component: HeaderBlock;
  let fixture: ComponentFixture<HeaderBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
