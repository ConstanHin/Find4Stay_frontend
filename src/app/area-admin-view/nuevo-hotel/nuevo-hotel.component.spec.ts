import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoHotelComponent } from './nuevo-hotel.component';

describe('NuevoHotelComponent', () => {
  let component: NuevoHotelComponent;
  let fixture: ComponentFixture<NuevoHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
