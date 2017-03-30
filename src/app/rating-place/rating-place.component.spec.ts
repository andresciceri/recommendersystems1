import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPlaceComponent } from './rating-place.component';

describe('RatingPlaceComponent', () => {
  let component: RatingPlaceComponent;
  let fixture: ComponentFixture<RatingPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
