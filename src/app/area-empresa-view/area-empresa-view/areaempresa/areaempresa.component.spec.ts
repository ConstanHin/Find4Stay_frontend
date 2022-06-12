import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaempresaComponent } from './areaempresa.component';

describe('AreaempresaComponent', () => {
  let component: AreaempresaComponent;
  let fixture: ComponentFixture<AreaempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
