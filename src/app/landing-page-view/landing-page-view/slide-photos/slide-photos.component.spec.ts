import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePhotosComponent } from './slide-photos.component';

describe('SlidePhotosComponent', () => {
  let component: SlidePhotosComponent;
  let fixture: ComponentFixture<SlidePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
