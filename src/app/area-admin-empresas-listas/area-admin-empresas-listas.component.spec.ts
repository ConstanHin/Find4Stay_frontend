import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdminEmpresasListasComponent } from './area-admin-empresas-listas.component';

describe('AreaAdminEmpresasListasComponent', () => {
  let component: AreaAdminEmpresasListasComponent;
  let fixture: ComponentFixture<AreaAdminEmpresasListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdminEmpresasListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdminEmpresasListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
