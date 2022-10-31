package com.greencommute.company.service;

import com.greencommute.company.entity.Company;
import com.greencommute.company.repository.CompanyRepository;
import com.greencommute.company.vo.Location;
import com.greencommute.company.vo.ResponseTemplateVO;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class CompanyServiceTest {
    @MockBean
    CompanyService companyService;
    @MockBean
    CompanyRepository companyRepository;
    @Mock
    private RestTemplate restTemplate;

    Company company1 = new Company("bmw","bmw", 1);
    Location location1 = new Location(1,"delhi","Hyderabad","Hitech city","500062", 567);

    @Test
    void test_getAllCompanies(){
        List<ResponseTemplateVO> myList=new ArrayList<>();
        myList.add(new ResponseTemplateVO(company1,location1));
        List<Location> locationList = new ArrayList<>();
        locationList.add(location1);
        when(companyService.findAll()).thenReturn(myList);

        when(restTemplate.getForEntity("http://localhost:9002/locations/", Location[].class))
                .thenReturn(new ResponseEntity(locationList, HttpStatus.OK));

        assertEquals(1, companyService.findAll().size());
    }

    @Test
    void test_getById(){
        int id=1;

        when(companyService.getCompanyWithLocation(1)).thenReturn(new ResponseTemplateVO(company1,location1));

        when(restTemplate.getForObject("http://localhost:9002/locations/" + company1.getLocationId(), Location.class)).thenReturn(location1);

        assertEquals(567, companyService.getCompanyWithLocation(id).getLocation().getAqiIndex());
    }
}

