package com.greencommute.location.service;

import com.greencommute.location.entity.Location;
import com.greencommute.location.repository.LocationRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
class LocationServiceTest {

    Location location1 = new Location("Delhi", "New Delhi", "Uttam Nagar", "500678", 678);
    Location location2 = new Location("UP", "Noida", "Sector-18", "500688", 578);

    @Autowired
    private LocationService locationService;

    @MockBean
    private LocationRepository locationRepository;

    @Test
    void findAllLocationsTest() {
        when(locationRepository.findAll()).thenReturn(
                Stream.of(
                        location1,
                        location2
                ).collect(Collectors.toList()));

        Assertions.assertEquals(2, locationService.findAll().size());

    }

    @Test
    void findLocationByIdTest() {
        int id=1;

        when(locationRepository.findById(id)).thenReturn(
                Optional.of(location1)
        );

        Assertions.assertEquals("Delhi", locationService.findById(id).getState());
    }
}
