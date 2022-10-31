package com.greencommute.job.vo;

import com.greencommute.job.entity.Job;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class JobDTOTest {
    Job job = new Job(1,false,"UI/UX Designer",34,false);
    Location location=new Location("Telangana","Hyderabad","Secundrabad","93939",234);
    Company company=new Company("Instagram","logoUrl",1);
    CompanyLocation companyLocation=new CompanyLocation(company,location);


    JobDTO jobRequiredFormat= JobDTO.Builder.newInstance().setId(job.getId())
            .setJobRole(job.getJobRole())
            .setSaved(job.isSaved)
            .setCompany(companyLocation.getCompany().getCompany())
            .setLocation(companyLocation.getLocation().getLocationName())
            .setActive(job.isActive)
            .setCity(companyLocation.getLocation().getCity())
            .setDistance(job.getDistance())
            .setLogo(companyLocation.getCompany().getLogo())
            .setPincode(companyLocation.getLocation().getPinCode())
            .setState(companyLocation.getLocation().getState()).build();

    @Test
    void setLocationIdTest() {
        jobRequiredFormat.setId(1);
        Assertions.assertEquals(1, jobRequiredFormat.getId());
    }
    @Test
    void setIsSavedTest() {
        jobRequiredFormat.setSaved(false);
        Assertions.assertEquals(false, jobRequiredFormat.isSaved());
    }
    @Test
    void setJobRoleTest() {
        jobRequiredFormat.setJobRole("CEO");
        Assertions.assertEquals("CEO", jobRequiredFormat.getJobRole());
    }
    @Test
    void setDistanceTest() {
        jobRequiredFormat.setDistance(23);
        Assertions.assertEquals(23, jobRequiredFormat.getDistance());
    }
    @Test
    void setIsActiveTest() {
        jobRequiredFormat.setActive(false);
        Assertions.assertEquals(false, jobRequiredFormat.isActive());
    }
    @Test
    void setLogoTest() {
        jobRequiredFormat.setLogo("logo");
        Assertions.assertEquals("logo", jobRequiredFormat.getLogo());
    }
    @Test
    void setCompanyTest() {
        jobRequiredFormat.setCompany("DMV");
        Assertions.assertEquals("DMV", jobRequiredFormat.getCompany());
    }
    @Test
    void setLocationTest() {
        jobRequiredFormat.setLocation("Mumbai");
        Assertions.assertEquals("Mumbai", jobRequiredFormat.getLocation());
    }
    @Test
    void setCityTest() {
        jobRequiredFormat.setCity("CEO");
        Assertions.assertEquals("CEO", jobRequiredFormat.getCity());
    }
    @Test
    void setStateTest() {
        jobRequiredFormat.setState("Telangana");
        Assertions.assertEquals("Telangana", jobRequiredFormat.getState());
    }
    @Test
    void setPinCodeTest() {
        jobRequiredFormat.setPincode("373729");
        Assertions.assertEquals("373729", jobRequiredFormat.getPincode());
    }
}
