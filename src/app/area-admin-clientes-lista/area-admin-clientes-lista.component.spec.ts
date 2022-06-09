import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdminClientesListaComponent } from './area-admin-clientes-lista.component';

describe('AreaAdminClientesListaComponent', () => {
  let component: AreaAdminClientesListaComponent;
  let fixture: ComponentFixture<AreaAdminClientesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdminClientesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdminClientesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
