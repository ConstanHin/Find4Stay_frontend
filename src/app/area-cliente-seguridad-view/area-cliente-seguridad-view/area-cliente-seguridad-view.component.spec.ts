import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaClienteSeguridadViewComponent } from './area-cliente-seguridad-view.component';

describe('AreaClienteSeguridadViewComponent', () => {
  let component: AreaClienteSeguridadViewComponent;
  let fixture: ComponentFixture<AreaClienteSeguridadViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaClienteSeguridadViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaClienteSeguridadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
