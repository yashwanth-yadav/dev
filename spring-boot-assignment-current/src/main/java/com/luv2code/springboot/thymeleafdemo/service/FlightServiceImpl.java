package com.luv2code.springboot.thymeleafdemo.service;

import com.luv2code.springboot.thymeleafdemo.dao.FlightRepository;
import com.luv2code.springboot.thymeleafdemo.entity.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlightServiceImpl implements FlightService {
    private static FlightRepository flightRepository;
    @Autowired
    public FlightServiceImpl(FlightRepository flightRepository1){
        flightRepository = flightRepository1;
    }

    @Override
    public List<Flight> findAll() {
        return flightRepository.findAllByOrderByArrivalTimeAsc();
    }

    @Override
    public Flight findById(int theId) {
        Optional<Flight> result = flightRepository.findById(theId);
        Flight theFlight =result.get();
        return theFlight;
    }

    @Override
    public Flight save(Flight theFlight) {
        return flightRepository.save(theFlight);
    }

    @Override
    public void deleteById(int theId) {
        flightRepository.deleteById(theId);
    }


    public List<Flight> getByKeyword(String keyword){
        return flightRepository.findByKeyword(keyword);
    }
}
