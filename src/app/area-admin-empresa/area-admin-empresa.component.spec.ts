import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdminEmpresaComponent } from './area-admin-empresa.component';

describe('AreaAdminEmpresaComponent', () => {
  let component: AreaAdminEmpresaComponent;
  let fixture: ComponentFixture<AreaAdminEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdminEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdminEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
