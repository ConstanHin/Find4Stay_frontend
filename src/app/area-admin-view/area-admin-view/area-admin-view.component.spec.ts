import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdminViewComponent } from './area-admin-view.component';

describe('AreaAdminViewComponent', () => {
  let component: AreaAdminViewComponent;
  let fixture: ComponentFixture<AreaAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdminViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
