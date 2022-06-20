import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdminHotelComponent } from './area-admin-hotel.component';

describe('AreaAdminHotelesComponent', () => {
  let component: AreaAdminHotelComponent;
  let fixture: ComponentFixture<AreaAdminHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdminHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdminHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
