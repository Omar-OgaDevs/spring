import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  //Se define el valor y se inyecta el atributo
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

}
