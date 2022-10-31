package com.greencommute.job.entity;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class JobEntityTest {

    private Job job = new Job();
    @Test
    void setJobIdTest() {
        job.setId(1);
        Assertions.assertEquals(1, job.getId());
    }

    @Test
    void setCompanyIdTest() {
        job.setCompanyId(1);
        Assertions.assertEquals(1, job.getCompanyId());
    }

    @Test
    void setJobRoleTest() {
        job.setJobRole("Ui/Ux Designer");
        Assertions.assertEquals("Ui/Ux Designer", job.getJobRole());
    }

    @Test
    void setSavedTest() {
        job.setSaved(false);
        Assertions.assertEquals(false, job.isSaved());
    }

    @Test
    void setDistanceTest() {
        job.setDistance(21);
        Assertions.assertEquals(21, job.getDistance());
    }

    @Test
    void setActiveTest() {
        job.setActive(false);
        Assertions.assertEquals(false, job.isActive());
    }

    @Test
    void setConstructorTest() {
        Job job=new Job(1,false,"CEO",35,false);

        Assertions.assertEquals(false, job.isActive());
    }







}
