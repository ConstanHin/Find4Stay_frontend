import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/service/empresa.service';

@Component({
  selector: 'app-mishoteles',
  templateUrl: './mishoteles.component.html',
  styleUrls: ['./mishoteles.component.css']
})
export class MishotelesComponent implements OnInit {

  id?: any;
  email?: any;
  data: any = {"id":""};
  datohoteles: any = {"nombre": "", "categoria": "", "ubicacion": "", "poblacion":"", "precio": ""};

  constructor(private empresaservice: EmpresaService) { }

  ngOnInit(): void {

    this.empresaservice.getempresaauth().subscribe(
      hoteles => { this.datohoteles = hoteles
        console.log(hoteles)
      }
    );
  }

}
