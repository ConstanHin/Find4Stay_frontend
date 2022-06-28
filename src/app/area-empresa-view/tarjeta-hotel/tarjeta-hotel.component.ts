import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-tarjeta-hotel',
  templateUrl: './tarjeta-hotel.component.html',
  styleUrls: ['./tarjeta-hotel.component.css']
})
export class TarjetaHotelComponent implements OnInit {

  @Input() hotel: Hotel = new Hotel();
  disabled: boolean = true;

  // form
  // form: FormGroup;
  // formImagen = new FormGroup({
  //   file: new FormControl()
  // })
  uploadForm : FormGroup = new FormGroup({
    profile: new FormControl(new FormData, Validators.required)
  });

  constructor(
    private formBuilder: FormBuilder,
    private hotelService: HotelService,
    private httpClient: HttpClient

  ) {}



  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onFileSelect(event: any) {
    console.log(event, "file select");

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile')?.setValue(file);
    }
  }

  editar() {
    this.disabled = !this.disabled;
  }

  cancelarCambios() {
    // Resetear valores del form con los recibidos por request
    // this.formDetallesCliente.reset();
    this.disabled = !this.disabled;

  }

  aceptarCambios() {
    // guardar los cambios
    // enviar un request put a la api para hacer el update
    // this.clienteService.update(
    //   this.cliente?.id,
    //   this.formDetallesCliente.value
    // ).subscribe(
    //   {
    //     next: v => {
    //       console.log(v);

    //       this.formDetallesCliente.reset;
    //       //Mostrar mensaje éxito
    //       this.mostrarMensaje("Se han modificado los datos.")

    //     },
    //     error: e => {
    //       console.log(e);
    //       //Mostrar mensaje fallo
    //       this.mostrarMensaje("Error.")
    //     }
    //   }

    // );
    // TODO: spinner feedaback mientras carga
    this.disabled = !this.disabled;
  }

  onSubmit() {

    const formData = new FormData();

    console.log("uploadForm", this.uploadForm.value.profile);


    formData.append('file', this.uploadForm.value.profile);

    console.log(formData.get('file'));



    this.hotelService.subirFotoHotel(this.hotel.id, formData.get('file')).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => console.log("ERROR", e),

      }
    )
  }

}
