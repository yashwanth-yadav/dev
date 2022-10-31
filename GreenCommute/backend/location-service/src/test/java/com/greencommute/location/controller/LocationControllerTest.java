package com.greencommute.location.controller;

import com.greencommute.location.entity.Location;
import com.greencommute.location.repository.LocationRepository;
import com.greencommute.location.service.LocationService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest()
@AutoConfigureMockMvc
class LocationControllerTest {

    Location location1 = new Location("Delhi", "New Delhi", "Uttam Nagar", "500678", 678);
    Location location2 = new Location("UP", "Noida", "Sector-18", "500688", 578);


    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private LocationService locationService;

    @MockBean
    private LocationRepository locationRepository;

    @Test
    void getAllLocationsTest() throws Exception {
        when(locationRepository.findAll()).thenReturn(
                Stream.of(
                        location1,
                        location2
                ).collect(Collectors.toList()));
        Assertions.assertEquals(2, locationService.findAll().size());
        mockMvc.perform(get("/locations/"))
                .andExpect(status().isOk());

    }

    @Test
    void getLocationByIdTest() throws Exception {
        int id=1;

        when(locationRepository.findById(id)).thenReturn(
                Optional.of(location1)
        );

        Assertions.assertEquals("Delhi", locationService.findById(id).getState());
        mockMvc.perform(get("/locations/1"))
                .andExpect(status().isOk());
    }

}
