import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdminHotelesComponent } from './area-admin-hoteles.component';

describe('AreaAdminHotelesComponent', () => {
  let component: AreaAdminHotelesComponent;
  let fixture: ComponentFixture<AreaAdminHotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdminHotelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdminHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
