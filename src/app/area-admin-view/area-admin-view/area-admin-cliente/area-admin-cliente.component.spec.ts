import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdminClienteComponent } from './area-admin-cliente.component';

describe('AreaAdminClientesComponent', () => {
  let component: AreaAdminClienteComponent;
  let fixture: ComponentFixture<AreaAdminClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdminClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdminClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
