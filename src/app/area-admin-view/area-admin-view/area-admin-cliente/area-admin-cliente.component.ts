import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-admin-cliente',
  templateUrl: './area-admin-cliente.component.html',
  styleUrls: ['./area-admin-cliente.component.css']
})
export class AreaAdminClienteComponent implements OnInit {


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  this.getCliente(Number(this.route.snapshot.paramMap.get('id')))
  }

  getCliente(id: number) {
    console.log('id:', id);

  }


}
