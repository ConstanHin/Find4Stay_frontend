import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdminClientesComponent } from './area-admin-clientes.component';

describe('AreaAdminClientesComponent', () => {
  let component: AreaAdminClientesComponent;
  let fixture: ComponentFixture<AreaAdminClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdminClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdminClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
