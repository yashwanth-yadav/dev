package com.luv2code.springboot.thymeleafdemo.services;

import com.luv2code.springboot.thymeleafdemo.dao.FlightRepository;
import com.luv2code.springboot.thymeleafdemo.entity.Flight;
import com.luv2code.springboot.thymeleafdemo.service.FlightService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
class FlightServiceImplTest {
    @Autowired
    FlightService bookServiceJPA;
    @MockBean
    FlightRepository bookRepository;

    @Test
    void save() {
        Flight flight = new Flight(1, "airasia", "11am", "Berlin");
        bookServiceJPA.save(flight);
        verify(bookRepository, times(1)).save(flight);
    }

    @Test
    void findById() {
        Flight flight = new Flight(1, "airasia", "11am", "Berlin");
        Optional<Flight> userById = Optional.of(flight);
        when(bookRepository.findById(1)).thenReturn(userById);
        assertEquals(bookServiceJPA.findById(1), flight);
    }

    @Test
    void findAll() {
        when(bookRepository.findAllByOrderByArrivalTimeAsc()).thenReturn(Stream.of(
                new Flight(1, "airasia", "11am", "Berlin"),
                new Flight(2, "airIndia", "10am", "Mumbai")
        ).collect(Collectors.toList()));
        assertEquals(2, bookServiceJPA.findAll().size());
    }

    @Test
    void deleteById() {
        bookServiceJPA.deleteById(1);
        verify(bookRepository, times(1)).deleteById(1);
    }
}
