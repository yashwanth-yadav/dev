package com.luv2code.springboot.thymeleafdemo.entity;


import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class FlightTest {

    @Test
    void getId() {
        Flight flight = new Flight();
        flight.setId(1);
        assertEquals(1, flight.getId());
    }

    @Test
    void getFlightName() {
        Flight flight = new Flight();
        flight.setFlightName("vivegam");
        assertEquals("vivegam", flight.getFlightName());
    }

    @Test
    void getArrivalTime() {
        Flight flight = new Flight();
        flight.setArrivalTime("11 am");
        assertEquals("11 am", flight.getArrivalTime());
    }

    @Test
    void getNoOfCopies() {
        Flight book = new Flight();
        book.setGateNo("mumbai");
        assertEquals("mumbai", book.getGateNo());
    }


}