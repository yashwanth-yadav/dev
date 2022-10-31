package com.greencommute.company.entity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class CompanyEntityTest {

    private Company company = new Company();
    @Test
    void setCompanyIdTest() {
        company.setId(1);
        Assertions.assertEquals(1, company.getId());
    }

    @Test
    void setCompanyNameTest() {
        company.setCompany("BMW");
        Assertions.assertEquals("BMW", company.getCompany());
    }

    @Test
    void setLogoTest() {
        company.setLogo("logo");
        Assertions.assertEquals("logo", company.getLogo());
    }

    @Test
    void setLocationTest() {
        company.setLocationId(1);
        Assertions.assertEquals(1, company.getLocationId());
    }

}
