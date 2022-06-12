import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdminReservaComponent } from './area-admin-reserva.component';

describe('AreaAdminReservaComponent', () => {
  let component: AreaAdminReservaComponent;
  let fixture: ComponentFixture<AreaAdminReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdminReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaAdminReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
