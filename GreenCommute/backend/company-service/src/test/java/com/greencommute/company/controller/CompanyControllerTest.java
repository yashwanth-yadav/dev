package com.greencommute.company.controller;

import com.greencommute.company.entity.Company;
import com.greencommute.company.service.CompanyService;
import com.greencommute.company.vo.Location;
import com.greencommute.company.vo.ResponseTemplateVO;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
class CompanyControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CompanyService companyService;

    @Mock
    private RestTemplate restTemplate;

    Company company1 = new Company("bmw","bmw", 1);
    Location location1 = new Location(1,"Telengana","Hyderabad","Hitech city","500056", 567);

    @Test
    void test_getAllCompanies() throws Exception {
        List<ResponseTemplateVO> myList=new ArrayList<>();
        myList.add(new ResponseTemplateVO(company1,location1));
        when(companyService.findAll()).thenReturn(myList);
        Assertions.assertEquals(1, companyService.findAll().size());
        mockMvc.perform(get("/companies/"))
                .andExpect(status().isOk());
    }
    
    @Test
    void test_getById() throws Exception {
        int id=1;
        when(companyService.getCompanyWithLocation(1)).thenReturn(new ResponseTemplateVO(company1,location1));

        when(restTemplate.getForObject("http://localhost:9002/locations/" + 1, Location.class)).thenReturn(location1);
        Assertions.assertEquals(567, companyService.getCompanyWithLocation(id).getLocation().getAqiIndex());
        mockMvc.perform(get("/companies/1"))
                .andExpect(status().isOk());
    }
}
