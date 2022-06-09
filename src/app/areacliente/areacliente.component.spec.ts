import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaclienteComponent } from './areacliente.component';

describe('AreaclienteComponent', () => {
  let component: AreaclienteComponent;
  let fixture: ComponentFixture<AreaclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
