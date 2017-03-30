/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TallerUnoComponent } from './taller-uno.component';

describe('TallerUnoComponent', () => {
  let component: TallerUnoComponent;
  let fixture: ComponentFixture<TallerUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallerUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallerUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
