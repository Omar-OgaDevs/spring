package com.example.springclientesbackend.models.dao;

import org.springframework.data.repository.CrudRepository;
import com.example.springclientesbackend.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long> {
  
}
