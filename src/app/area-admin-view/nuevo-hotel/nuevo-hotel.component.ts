import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-nuevo-hotel',
  templateUrl: './nuevo-hotel.component.html',
  styleUrls: ['./nuevo-hotel.component.css']
})
export class NuevoHotelComponent implements OnInit {

  message: string | undefined;
  errorMessage: string | undefined;

    /**
   * nombre categoria poblacion ubicacion importe
   */
     formGroupAddHotel = new FormGroup({
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      poblacion: new FormControl('', Validators.required),
      ubicacion: new FormControl('', Validators.required),
      importe: new FormControl('', Validators.required),

    })


  constructor( private hotelService: HotelService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.formGroupAddHotel.value);

    this.hotelService.create(this.formGroupAddHotel.value).subscribe({
      next: v => {
        this.message = "Registo añadido con éxito.";
        setTimeout(() => this.message = undefined, 4000);
      },
      error: e => {
        this.errorMessage = "Ha ocurrido un error.";
        setTimeout(() => this.errorMessage = undefined, 4000)
      }

    })
  }



}
