package com.greencommute.job.controller;

import com.greencommute.job.entity.Job;
import com.greencommute.job.service.JobsService;
import com.greencommute.job.vo.JobDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
@Slf4j
public class JobsControler {
    @Autowired
    private JobsService jobsService;

    @CrossOrigin
    @PutMapping("/{id}")
    public Job updateJobs(@PathVariable(value = "id") int jobId) {
        Job storedJob = jobsService.getJobsWithId(jobId);
        storedJob.isSaved = !storedJob.isSaved;
        Job updatedJob = jobsService.saveJob(storedJob);
        return updatedJob;
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @Transactional(readOnly = true)
    public JobDTO getJobWithCompany(@PathVariable("id") int id) {

        return jobsService.getJobWithCompany(id);

    }

    @CrossOrigin
    @GetMapping("/")
    public List<JobDTO> findAllJobsWithCompanyAndLocation() {
        List<JobDTO> jobsList = jobsService.findAllJobsWithCompanyAndLocation();
        return jobsList;
    }
}
