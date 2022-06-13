import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLateralEmpresaComponent } from './barra-lateral-empresa.component';

describe('BarraLateralEmpresaComponent', () => {
  let component: BarraLateralEmpresaComponent;
  let fixture: ComponentFixture<BarraLateralEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraLateralEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraLateralEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
