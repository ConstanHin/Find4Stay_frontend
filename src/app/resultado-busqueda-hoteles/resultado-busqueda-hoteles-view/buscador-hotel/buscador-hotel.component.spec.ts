import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscadorHotelComponent } from './buscador-hotel.component';


describe('BuscadorHotelComponent', () => {
  let component: BuscadorHotelComponent;
  let fixture: ComponentFixture<BuscadorHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
