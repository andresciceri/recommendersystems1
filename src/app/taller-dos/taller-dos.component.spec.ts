/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TallerDosComponent } from './taller-dos.component';

describe('TallerDosComponent', () => {
  let component: TallerDosComponent;
  let fixture: ComponentFixture<TallerDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallerDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallerDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
