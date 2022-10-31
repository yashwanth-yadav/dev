package com.greencommute.job.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;




@Getter
@Setter
@NoArgsConstructor
public class Company {
    private int id;
    private String company;
    private String logo;
    private int locationId;
    public Company(String company, String logo, int locationId) {
        this.company = company;
        this.logo = logo;
        this.locationId = locationId;
    }
}
