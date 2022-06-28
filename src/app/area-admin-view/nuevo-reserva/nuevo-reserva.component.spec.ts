import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoReservaComponent } from './nuevo-reserva.component';

describe('NuevoReservaComponent', () => {
  let component: NuevoReservaComponent;
  let fixture: ComponentFixture<NuevoReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
