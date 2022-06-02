package com.luv2code.springboot.thymeleafdemo.service;


import com.luv2code.springboot.thymeleafdemo.entity.Flight;

import java.util.List;

public interface FlightService {
    public List<Flight> findAll();
    public Flight findById(int theId);
    public Flight save(Flight theFlight);
    public void deleteById(int theId);

    public List<Flight> getByKeyword(String keyword);

}
