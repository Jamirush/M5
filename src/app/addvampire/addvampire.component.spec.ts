import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvampireComponent } from './addvampire.component';

describe('AddvampireComponent', () => {
  let component: AddvampireComponent;
  let fixture: ComponentFixture<AddvampireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvampireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvampireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
