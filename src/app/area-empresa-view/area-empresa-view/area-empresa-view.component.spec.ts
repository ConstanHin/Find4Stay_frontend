import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEmpresaViewComponent } from './area-empresa-view.component';

describe('AreaEmpresaViewComponent', () => {
  let component: AreaEmpresaViewComponent;
  let fixture: ComponentFixture<AreaEmpresaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaEmpresaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaEmpresaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
