import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserTwoComponent } from './create-user-two.component';

describe('CreateUserTwoComponent', () => {
  let component: CreateUserTwoComponent;
  let fixture: ComponentFixture<CreateUserTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
