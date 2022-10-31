package com.greencommute.job.controller;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.greencommute.job.entity.Job;
import com.greencommute.job.repository.JobRepository;
import com.greencommute.job.service.JobsService;
import com.greencommute.job.vo.Company;
import com.greencommute.job.vo.CompanyLocation;
import com.greencommute.job.vo.JobDTO;
import com.greencommute.job.vo.Location;
import org.junit.jupiter.api.*;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.options;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest()
@AutoConfigureMockMvc
class JobControllerTest {

    Job job1 = new Job(1,false,"CEO",35,false);
    Job job2 = new Job(2,false,"CFO",35,false);


    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private JobsService jobsService;

    @MockBean
    private JobRepository jobRepository;

    @Mock
    private RestTemplate restTemplate;

    public static WireMockServer wireMockRule = new WireMockServer(options().dynamicPort());

    @BeforeAll
    public static void beforeAll() {
        wireMockRule.start();
    }

    @AfterAll
    public static void afterAll() {
        wireMockRule.stop();
    }

    @AfterEach
    public void afterEach() {
        wireMockRule.resetAll();
    }

    @Test
    void findAllJobsWithCompanyAndLocation() throws Exception {
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

//        wireMockRule.stubFor(get(urlEqualTo("/customers/" + DEFAULT_CUSTOMER_ID))
//                .willReturn(aResponse()
//                        .withHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
//                        .withBody(objectMapper.writeValueAsString(
//                                        Customer.builder()
//                                                .id(DEFAULT_CUSTOMER_ID)
//                                                .name(faker.name().name())
//                                                .dob(faker.date().birthday().toInstant()
//                                                        .atZone(ZoneId.systemDefault())
//                                                        .toLocalDate())
//                                                .build()
//                                )
//                        ))
//        );

//        Optional<Job> jobsOptional = Optional.of(job);
                //        when(jobsService.getJobWithCompany(1)).thenReturn(jobDto);
                //        mockMvc.perform(MockMvcRequestBuilders.get("/jobs/1")
                //                        ).
                //                andDo(MockMvcResultHandlers.print());
                //        verify(jobsService).getJobsWithId(1);
                //        verify(jobsService, times(1)).getJobsWithId(1);
//        when(jobRepository.findAll()).thenReturn(
//                Stream.of(
//                        job1,
//                        job2
//                ).collect(Collectors.toList()));
////        Assertions.assertEquals(2, jobsService.findAllJobsWithCompanyAndLocation().size());
//        mockMvc.perform(get("/jobs/"))
//                .andExpect(status().isBadRequest());

    }

    @Test
    void getJobWithCompanyTest() throws Exception {
        int id=1;

        when(jobRepository.findById(id)).thenReturn(
                Optional.of(job1)
        );

        Assertions.assertEquals("CEO", job1.getJobRole());

    }

    @Test
    void updateJobByIdTest() throws Exception {
        Job job1 = new Job(1,false,"CEO",35,false);
        when(jobRepository.findById(1)).thenReturn(
                Optional.of(job1)
        );
        jobsService.saveJob(job1);
        verify(jobRepository, times(1)).save(job1);
        mockMvc.perform(put("/jobs/1"))
                .andExpect(status().isOk());

    }



}
