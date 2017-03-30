/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TallerTresComponent } from './taller-tres.component';

describe('TallerTresComponent', () => {
  let component: TallerTresComponent;
  let fixture: ComponentFixture<TallerTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallerTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallerTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
