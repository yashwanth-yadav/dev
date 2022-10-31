package com.greencommute.job.service;

import com.greencommute.job.entity.Job;
import com.greencommute.job.repository.JobRepository;
import com.greencommute.job.vo.Company;
import com.greencommute.job.vo.CompanyLocation;
import com.greencommute.job.vo.JobDTO;
import com.greencommute.job.vo.Location;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class JobServiceTest {

    Job job1 = new Job(1,false,"CEO",35,false);
    Job job2 = new Job(2,false,"CFO",45,false);

    @Mock
    private RestTemplate restTemplate;

    @Autowired
    private JobsService jobsService;
//    @MockBean
//    private JobsService jobsServicemock;

    @MockBean
    private JobRepository jobRepository;

    @Test
    void findAllJobsTest() {
        when(jobRepository.findAll()).thenReturn(
                Stream.of(
                        job1,
                        job2
                ).collect(Collectors.toList()));

        Assertions.assertEquals(2, jobsService.findAll().size());

    }

    @Test
    void findJobByIdTest() {
        int id=1;

        when(jobRepository.findById(id)).thenReturn(
                Optional.of(job1)
        );

        Assertions.assertEquals("CEO", jobsService.getJobsWithId(id).getJobRole());
    }

    @Test
    void findSaveJobTest() {
        Job job1 = new Job(1,false,"CEO",35,false);

        jobsService.saveJob(job1);
        verify(jobRepository, times(1)).save(job1);

//        Assertions.assertEquals("CEO", jobsService.getJobsWithId(1).getJobRole());
    }
    @Test
    void getJobWithCompanyTest(){
        Job job = new Job(1,false,"UI/UX Designer",34,false);

        JobDTO jobDto = JobDTO.Builder.newInstance().setId(1)
                .setJobRole("UI/UX Designer")
                .setSaved(false)
                .setCompany("Instagram")
                .setLocation("Telangana")
                .setActive(false)
                .setCity("Hyderabad")
                .setDistance(34)
                .setLogo("logoURL")
                .setPincode("254245")
                .setState("Telangana").build();
        Location location=new Location("Telangana","Hyderabad","Secundrabad","93939",234);
        Company company=new Company("Instagram","logoUrl",1);
        CompanyLocation companyLocation=new CompanyLocation(company,location);
        companyLocation.setCompany(company);
        companyLocation.setLocation(location);

        Mockito
                .when(restTemplate.getForObject(
                        "http://localhost:9003/1", CompanyLocation.class))
                .thenReturn(companyLocation);

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
//        Job job3 = jobsService.getJobsWithId(1);
        Assertions.assertEquals(jobDto.id,companyLocation.getCompany().getLocationId());

        int id=1;

        when(jobRepository.findById(id)).thenReturn(
                Optional.of(job1)
        );

        Assertions.assertEquals("CEO", jobsService.getJobsWithId(id).getJobRole());

    }
//
//    @Test
//    void getJobWithCompanyLocation()  {
////        JobDTO jobDTO= new JobDTO();
//        Job job = new Job(1,false,"UI/UX Designer",34,false);
//        Location location=new Location("Telangana","Hyderabad","Secundrabad","93939",234);
//        Company company=new Company("Instagram","logoUrl",1);
//        CompanyLocation companyLocation=new CompanyLocation(company,location);
//
//        when(jobRepository.findById(1)).thenReturn(Optional.of(job));
//        when(restTemplate.getForObject("http://localhost:9003/companies/" + Optional.of(job).get().getCompanyId(), CompanyLocation.class)).thenReturn(companyLocation);
//
////        jobDTO.setJob(Optional.of(job).get());
////        jobDTO.setLocation(location1);
//        JobDTO jobDTO= JobDTO.Builder.newInstance().setId(job.getId())
//                .setJobRole(job.getJobRole())
//                .setSaved(job.isSaved)
//                .setCompany(companyLocation.getCompany().getCompany())
//                .setLocation(companyLocation.getLocation().getLocationName())
//                .setActive(job.isActive)
//                .setCity(companyLocation.getLocation().getCity())
//                .setDistance(job.getDistance())
//                .setLogo(companyLocation.getCompany().getLogo())
//                .setPincode(companyLocation.getLocation().getPinCode())
//                .setState(companyLocation.getLocation().getState()).build();
//        assertEquals(null,jobsServicemock.getJobWithCompany(1));
//    }





}
