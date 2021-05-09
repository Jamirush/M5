import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VampiresComponent } from './vampires.component';

describe('VampiresComponent', () => {
  let component: VampiresComponent;
  let fixture: ComponentFixture<VampiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VampiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VampiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
