/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RatingBookComponent } from './rating-book.component';

describe('RatingBookComponent', () => {
  let component: RatingBookComponent;
  let fixture: ComponentFixture<RatingBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
