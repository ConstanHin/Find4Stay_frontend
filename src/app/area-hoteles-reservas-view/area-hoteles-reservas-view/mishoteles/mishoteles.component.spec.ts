import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MishotelesComponent } from './mishoteles.component';

describe('MishotelesComponent', () => {
  let component: MishotelesComponent;
  let fixture: ComponentFixture<MishotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MishotelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MishotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
