package com.luv2code.springboot.thymeleafdemo.services;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.*;

import com.luv2code.springboot.thymeleafdemo.dao.FlightRepository;
import com.luv2code.springboot.thymeleafdemo.entity.Flight;
import com.luv2code.springboot.thymeleafdemo.service.FlightService;
import com.luv2code.springboot.thymeleafdemo.service.FlightServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootMockitoApplicationTests {
    @Autowired
    private FlightService service;

    @MockBean
    private FlightRepository repository;

    @Test
    public void getFlightsTests(){
        when(repository.findAllByOrderByArrivalTimeAsc()).thenReturn(Stream.of(new Flight(1,"Pushpakavimanam","20 pm","vaikuntam"),new Flight(2,"Gaganavihari","21 pm","Kailasham")).collect(Collectors.toList()));
        assertEquals(2,service.findAll().size());
    }

    @Test
    public void getByKeywordTest() {

        when(repository.findByKeyword("Pushpakavimanam")).thenReturn(Stream.of(new Flight(1, "Pushpakavimanam", "20 pm", "vaikuntam")).collect(Collectors.toList()));
        assertEquals(1, service.getByKeyword("Pushpakavimanam").size());
    }

    @Test
    public void saveFlightTest(){
        Flight flight=new Flight(1, "Pushpakavimanam", "20 pm", "vaikuntam");
        when(repository.save(flight)).thenReturn(flight);
        assertEquals(flight,service.save(flight));
    }

    @Test
    public void deleteFlightByIdTest(){
        Flight flight=new Flight(1, "Pushpakavimanam", "20 pm", "vaikuntam");
        service.deleteById(flight.getId());
        verify(repository,times(1)).deleteById(flight.getId());
    }

//    @Test
//    public void test_getEmployeeByEmployeeId()
//    {
//        // Setup the mock repo
//        int id = 1;
//        Flight e1ForMock = new Flight(id, "Pushpakavimanam", "20pm", "vaikuntam");
//        doReturn(Optional.of(e1ForMock)).when(repository).findById(id);
//        // Make the service call
//        Flight e1ByService = FlightServiceImpl.findByID(id);
//        // Assert the response
//        assertNotNull(String.valueOf(e1ByService),"Employee with employeeId : "+id+" not found");
//        assertEquals(id,e1ByService.getId());
//        assertEquals(e1ForMock.getFlightName(), e1ByService.getFlightName());
//        assertEquals(e1ForMock.getArrivalTime(), e1ByService.getArrivalTime());
//        assertEquals(e1ForMock.getGateNo(), e1ByService.getGateNo());
//    }
}
