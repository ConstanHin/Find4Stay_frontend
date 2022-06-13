import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEmpresaSeguridadViewComponent } from './area-empresa-seguridad-view.component';

describe('AreaEmpresaSeguridadViewComponent', () => {
  let component: AreaEmpresaSeguridadViewComponent;
  let fixture: ComponentFixture<AreaEmpresaSeguridadViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaEmpresaSeguridadViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaEmpresaSeguridadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
