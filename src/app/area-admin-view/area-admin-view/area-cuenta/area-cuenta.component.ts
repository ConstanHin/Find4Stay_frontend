import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/service/cuenta.service';

@Component({
  selector: 'app-area-cuenta',
  templateUrl: './area-cuenta.component.html',
  styleUrls: ['./area-cuenta.component.css']
})
export class AreaCuentaComponent implements OnInit {

  data: any = {"username":"", "email": ""};

  constructor(private cuentaservice: CuentaService) { }

  ngOnInit(): void {

    this.cuentaservice.getauthcuenta().subscribe(
      cuentaAuth => { this.data = cuentaAuth
        console.log(cuentaAuth);
      }
    );

  }

}
