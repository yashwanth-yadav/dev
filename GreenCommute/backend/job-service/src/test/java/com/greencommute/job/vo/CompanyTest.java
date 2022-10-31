package com.greencommute.job.vo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class CompanyTest {
    private Company company = new Company();
    @Test
    void setCompanyIdTest() {
        company.setId(1);
        Assertions.assertEquals(1, company.getId());
    }

    @Test
    void setCompanyTest() {
        company.setCompany("DMV");
        Assertions.assertEquals("DMV", company.getCompany());
    }

    @Test
    void setLocationCityTest() {
        company.setLogo("logo");
        Assertions.assertEquals("logo", company.getLogo());
    }

    @Test
    void setLocationTest() {
        company.setLocationId(1);
        Assertions.assertEquals(1, company.getLocationId());
    }



    @Test
    void setConstructorTest() {
        Company company1=new Company("DMV","logo", 7);

        Assertions.assertEquals("DMV", company1.getCompany());
    }

}
