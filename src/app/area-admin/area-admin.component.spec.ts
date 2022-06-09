import { ComponentFixture, TestBed } from '@angular/core/testing';

import { areaAdminComponent } from './area-admin.component';

describe('AreaEmpresaComponent', () => {
  let component: areaAdminComponent;
  let fixture: ComponentFixture<areaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ areaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(areaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
