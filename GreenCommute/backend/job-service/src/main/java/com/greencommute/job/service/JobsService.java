package com.greencommute.job.service;

import com.greencommute.job.entity.Job;
import com.greencommute.job.exception.ResourceNotFoundException;
import com.greencommute.job.repository.JobRepository;
import com.greencommute.job.vo.CompanyLocation;
import com.greencommute.job.vo.JobDTO;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@Service
@Slf4j
public class JobsService implements JobServiceInterface {
    @Autowired
    private JobRepository jobRepository;

    @Value("${COMPANIES_LIST_API_URL}")
    private String companyListApiUrl;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public Job saveJob(Job job) {
        return jobRepository.save(job);
    }

    @Override
    public List<Job> findAll() {
        return jobRepository.findAll();
    }

    @Override
    public Job getJobsWithId(int jobsId) {
        Job result = jobRepository.findById(jobsId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found job with id = " + jobsId));

        return result;

    }

    @Override
    public List<JobDTO> findAllJobsWithCompanyAndLocation() {
        List<JobDTO> jobRequiredFormatList = new ArrayList<>();
        List<Job> jobList = jobRepository.findAll();
        ResponseEntity<CompanyLocation[]> response = restTemplate.getForEntity(companyListApiUrl,
                CompanyLocation[].class);
        CompanyLocation[] companyLocations = response.getBody();
        HashMap<Integer, CompanyLocation> companyLocationHashMap = new HashMap<>();
        Arrays.stream(companyLocations).forEach(
                companyLocation -> companyLocationHashMap.put(companyLocation.getCompany().getId(), companyLocation));
        for (Job job : jobList) {

            if (companyLocationHashMap.containsKey(job.getCompanyId())) {
                JobDTO jobRequiredFormat = JobDTO.Builder.newInstance().setId(job.getId())
                        .setJobRole(job.getJobRole())
                        .setSaved(job.isSaved)
                        .setCompany(companyLocationHashMap.get(job.getCompanyId()).getCompany().getCompany())
                        .setLocation(companyLocationHashMap.get(job.getCompanyId()).getLocation().getLocationName())
                        .setActive(job.isActive)
                        .setCity(companyLocationHashMap.get(job.getCompanyId()).getLocation().getCity())
                        .setDistance(job.getDistance())
                        .setLogo(companyLocationHashMap.get(job.getCompanyId()).getCompany().getLogo())
                        .setPincode(companyLocationHashMap.get(job.getCompanyId()).getLocation().getPinCode())
                        .setState(companyLocationHashMap.get(job.getCompanyId()).getLocation().getState()).build();
                jobRequiredFormatList.add(jobRequiredFormat);
            }

        }
        return jobRequiredFormatList;
    }

    @Override
    public JobDTO getJobWithCompany(int id) {
        Job result = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found job with id = " + id));
        CompanyLocation companyLocation = restTemplate.getForObject(companyListApiUrl + result.getCompanyId(),
                CompanyLocation.class);

        return JobDTO.Builder.newInstance().setId(result.getId())
                .setJobRole(result.getJobRole())
                .setSaved(result.isSaved)
                .setCompany(companyLocation.getCompany().getCompany())
                .setLocation(companyLocation.getLocation().getLocationName())
                .setActive(result.isActive)
                .setCity(companyLocation.getLocation().getCity())
                .setDistance(result.getDistance())
                .setLogo(companyLocation.getCompany().getLogo())
                .setPincode(companyLocation.getLocation().getPinCode())
                .setState(companyLocation.getLocation().getState()).build();
    }

}