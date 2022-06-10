import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdminHotelesListasComponent } from './area-admin-hoteles-listas.component';

describe('AreaAdminHotelesListasComponent', () => {
  let component: AreaAdminHotelesListasComponent;
  let fixture: ComponentFixture<AreaAdminHotelesListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdminHotelesListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdminHotelesListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
