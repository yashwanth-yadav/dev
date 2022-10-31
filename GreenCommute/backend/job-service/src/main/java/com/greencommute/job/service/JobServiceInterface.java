package com.greencommute.job.service;

import com.greencommute.job.entity.Job;
import com.greencommute.job.vo.JobDTO;

import java.util.List;

public interface JobServiceInterface {

     Job saveJob(Job job);

     List<Job> findAll();

     Job getJobsWithId(int jobsId);

    JobDTO getJobWithCompany(int id);
    public List<JobDTO> findAllJobsWithCompanyAndLocation();
}
