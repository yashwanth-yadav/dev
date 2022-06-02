package com.luv2code.springboot.thymeleafdemo.controller;

import com.luv2code.springboot.thymeleafdemo.dao.FlightRepository;
import com.luv2code.springboot.thymeleafdemo.entity.Flight;
import com.luv2code.springboot.thymeleafdemo.service.FlightService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.Optional;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@ExtendWith(SpringExtension.class)
//@WebMvcTest(BookController.class)
@AutoConfigureMockMvc(addFilters = false)
class FlightScheduleControllerTest {
    @MockBean
    FlightService flightServiceJpa;
    @MockBean
    FlightRepository flightRepository;

    @Autowired
    private MockMvc mockMvc;

    @Test
    void save() throws Exception {
        Flight flight = new Flight(1, "airasia", "11am", "Berlin");
        mockMvc.perform(MockMvcRequestBuilders.post("/flights/save").param("flight"
                        , "id=1&flightName=airasia&arrivalTime=11am&gateNo=Berlin"))
                .andExpect(status().isBadRequest());
    }

    @Test
    void addFlight() throws Exception {
        Flight flight = new Flight(1, "airasia", "11 am", "Berlin");
        when(flightServiceJpa.findById(1)).thenReturn(flight);
        mockMvc.perform(get("/flights/showFormForAdd"))
                .andExpect(status().isOk());
    }
//
//    @Test
//    void findUser() throws Exception {
//        Book book1 = new Book(1, "HARRYPOTTER", 200.5, 123);
//        Book book2 = new Book(2, "HARRYPOTTER1", 2002.5, 3123);
//        when(flightServiceJpa.findAll()).thenReturn(Arrays.asList(book1, book2));
//        //   assertEquals(2, bookServiceJPA.findAll().size());
//        this.mockMvc.perform(get("/book/list"))
//                .andExpect(status().isOk())
//                .andExpect(model().attribute("book", hasSize(2)))
//                .andExpect(view().name("books-list"));
//    }
//
    @Test
    void getList() throws Exception {
        Flight flight1 = new Flight(1, "airasia", "11 am", "Berlin");
        Flight flight2 = new Flight(2, "airIndia", "12 am", "Varanasi");
        when(flightServiceJpa.findAll()).thenReturn(Arrays.asList(flight1, flight2));
        this.mockMvc.perform(get("/flights/list"))
                .andExpect(status().isOk());

    }

    @Test
    void findFlightForUpdate() throws Exception {
        Flight flight1 = new Flight(1, "airasia", "11 am", "Berlin");
        Optional<Flight> artistById = Optional.of(flight1);
        when(flightServiceJpa.findById(1)).thenReturn(flight1);
        mockMvc.perform(get("/flights/showFormForUpdate").param("flightId", "1"))
                .andExpect(view().name("flights/flight-form"));

    }

    @Test
    void deleteFlight() throws Exception {
        Flight flight = new Flight(1, "airasia", "11 am", "Berlin");
        flightServiceJpa.save(flight);
        flightServiceJpa.deleteById(1);
        mockMvc.perform(MockMvcRequestBuilders.get("/flights/delete").param("flightId", "1"))
                .andExpect(MockMvcResultMatchers.view().name("redirect:/flights/list"));
    }


}
