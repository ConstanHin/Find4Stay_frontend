import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaClienteReservasViewComponent } from './area-cliente-reservas-view.component';

describe('AreaClienteReservasViewComponent', () => {
  let component: AreaClienteReservasViewComponent;
  let fixture: ComponentFixture<AreaClienteReservasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaClienteReservasViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaClienteReservasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
