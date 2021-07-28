import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  //Definimos el arreglo JSON
  clientes: Cliente[] = [
    {id: 1, nombre: 'Evelyn1', apellido: 'Garcia1', email: 'evelyn1@mail.com', createdAt: '07-12-2013'},
    {id: 2, nombre: 'Evelyn2', apellido: 'Garcia2', email: 'evelyn2@mail.com', createdAt: '07-12-2013'},
    {id: 3, nombre: 'Evelyn3', apellido: 'Garcia3', email: 'evelyn3@mail.com', createdAt: '07-13-2013'},
    {id: 4, nombre: 'Evelyn4', apellido: 'Garcia4', email: 'evelyn4@mail.com', createdAt: '07-13-2013'},
    {id: 5, nombre: 'Evelyn5', apellido: 'Garcia5', email: 'evelyn5@mail.com', createdAt: '07-14-2013'},
    {id: 6, nombre: 'Evelyn6', apellido: 'Garcia6', email: 'evelyn6@mail.com', createdAt: '07-14-2013'},
    {id: 7, nombre: 'Evelyn7', apellido: 'Garcia7', email: 'evelyn7@mail.com', createdAt: '07-15-2013'},
    {id: 8, nombre: 'Evelyn8', apellido: 'Garcia8', email: 'evelyn8@mail.com', createdAt: '07-15-2013'},
    {id: 9, nombre: 'Evelyn9', apellido: 'Garcia9', email: 'evelyn9@mail.com', createdAt: '07-16-2013'},
    {id: 10, nombre: 'Evelyn10', apellido: 'Garcia10', email: 'evelyn10@mail.com', createdAt: '07-16-2013'},
    {id: 11, nombre: 'Evelyn11', apellido: 'Garcia11', email: 'evelyn11@mail.com', createdAt: '07-17-2013'},
    {id: 12, nombre: 'Evelyn12', apellido: 'Garcia12', email: 'evelyn12@mail.com', createdAt: '07-17-2013'},
    {id: 13, nombre: 'Evelyn13', apellido: 'Garcia13', email: 'evelyn13@mail.com', createdAt: '07-18-2013'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
