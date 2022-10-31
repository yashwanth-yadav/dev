package com.greencommute.company.vo;

import com.greencommute.company.entity.Company;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class ResponseTemplateTest {

    private ResponseTemplateVO responseTemplateVO = new ResponseTemplateVO();

    @Test
    void setCompanyTest() {
        responseTemplateVO.setCompany(new Company("myntra","myntra",1));
        Assertions.assertEquals("myntra", responseTemplateVO.getCompany().getCompany());
    }

    @Test
    void setLocationTest(){
        responseTemplateVO.setLocation(new Location(1,"delhi","Hyderabad","Hitech city","500062", 567));
        Assertions.assertEquals("delhi", responseTemplateVO.getLocation().getState());
    }
    @Test
    void setConstructorTest() {
        Location location=new Location(1,"Telangana","Hyderabad", "Secundrabad", "505002", 747);
        Company company = new Company("hp","hp",1);
        ResponseTemplateVO responseTemplateVO1 = new ResponseTemplateVO(company,location);
        Assertions.assertEquals("hp", responseTemplateVO1.getCompany().getLogo());
    }


}
