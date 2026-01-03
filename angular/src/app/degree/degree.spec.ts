import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Degree } from './degree';

describe('Degree', () => {
  let component: Degree;
  let fixture: ComponentFixture<Degree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Degree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Degree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
