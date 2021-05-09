import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynightComponent } from './bynight.component';

describe('BynightComponent', () => {
  let component: BynightComponent;
  let fixture: ComponentFixture<BynightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BynightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BynightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
