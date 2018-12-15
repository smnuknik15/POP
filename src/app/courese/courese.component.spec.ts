import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoureseComponent } from './courese.component';

describe('CoureseComponent', () => {
  let component: CoureseComponent;
  let fixture: ComponentFixture<CoureseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoureseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoureseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
