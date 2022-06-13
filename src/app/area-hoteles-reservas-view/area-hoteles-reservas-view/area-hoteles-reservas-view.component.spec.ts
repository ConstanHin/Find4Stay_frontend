import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaHotelesReservasViewComponent } from './area-hoteles-reservas-view.component';

describe('AreaHotelesReservasViewComponent', () => {
  let component: AreaHotelesReservasViewComponent;
  let fixture: ComponentFixture<AreaHotelesReservasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaHotelesReservasViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaHotelesReservasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
