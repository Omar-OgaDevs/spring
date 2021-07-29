package com.example.springclientesbackend.models.services;

import java.util.List;

import com.example.springclientesbackend.models.entity.Cliente;

public interface IClienteService {

  //Contrato de implementacion
  //Métodos del CRUD
  public List<Cliente> findAll();
  
}
