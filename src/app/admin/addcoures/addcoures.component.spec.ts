import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcouresComponent } from './addcoures.component';

describe('AddcouresComponent', () => {
  let component: AddcouresComponent;
  let fixture: ComponentFixture<AddcouresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcouresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcouresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
