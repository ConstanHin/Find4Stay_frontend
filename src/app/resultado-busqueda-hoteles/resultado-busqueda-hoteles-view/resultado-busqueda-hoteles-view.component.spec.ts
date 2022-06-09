import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBusquedaHotelesViewComponent } from './resultado-busqueda-hoteles-view.component';

describe('ResultadoBusquedaHotelesViewComponent', () => {
  let component: ResultadoBusquedaHotelesViewComponent;
  let fixture: ComponentFixture<ResultadoBusquedaHotelesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoBusquedaHotelesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBusquedaHotelesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
