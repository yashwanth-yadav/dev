package com.greencommute.job.entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="job")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int companyId;
    public boolean isSaved;
    private String jobRole;
    private int distance;
    public boolean isActive;

    public Job(int companyId, boolean isSaved, String jobRole, int distance, boolean isActive) {
        this.companyId = companyId;
        this.isSaved = isSaved;
        this.jobRole = jobRole;
        this.distance = distance;
        this.isActive = isActive;
    }

}
