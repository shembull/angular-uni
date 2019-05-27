import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStartComponent } from './new-start.component';

describe('NewStartComponent', () => {
  let component: NewStartComponent;
  let fixture: ComponentFixture<NewStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
