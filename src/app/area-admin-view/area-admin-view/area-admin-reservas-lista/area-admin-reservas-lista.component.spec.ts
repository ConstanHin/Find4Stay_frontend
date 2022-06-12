import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdminReservasListaComponent } from './area-admin-reservas-lista.component';

describe('AreaAdminReservasListaComponent', () => {
  let component: AreaAdminReservasListaComponent;
  let fixture: ComponentFixture<AreaAdminReservasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdminReservasListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdminReservasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
