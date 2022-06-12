import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaClienteViewComponent } from './area-cliente-view.component';

describe('AreaClienteViewComponent', () => {
  let component: AreaClienteViewComponent;
  let fixture: ComponentFixture<AreaClienteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaClienteViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaClienteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
