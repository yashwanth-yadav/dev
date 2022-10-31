package com.greencommute.job.vo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@SpringBootTest
class LocationTest {

    private Location location = new Location();
    @Test
    void setLocationIdTest() {
        location.setId(1);
        Assertions.assertEquals(1, location.getId());
    }

    @Test
    void setLocationStateTest() {
        location.setState("Delhi");
        Assertions.assertEquals("Delhi", location.getState());
    }

    @Test
    void setLocationCityTest() {
        location.setCity("New Delhi");
        Assertions.assertEquals("New Delhi", location.getCity());
    }

    @Test
    void setLocationTest() {
        location.setLocationName("Uttam Nagar");
        Assertions.assertEquals("Uttam Nagar", location.getLocationName());
    }

    @Test
    void setLocationPincodeTest() {
        location.setPinCode("500678");
        Assertions.assertEquals("500678", location.getPinCode());
    }

    @Test
    void setLocationAQIIndexTest() {
        location.setAqiIndex(567);
        Assertions.assertEquals(567, location.getAqiIndex());
    }

    @Test
    void setConstructorTest() {
        Location location=new Location("Telangana","Hyderabad", "Secundrabad", "505002", 747);

        Assertions.assertEquals("Hyderabad", location.getCity());
    }


}
