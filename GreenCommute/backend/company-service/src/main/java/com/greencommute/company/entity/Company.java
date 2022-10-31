package com.greencommute.company.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.transaction.Transactional;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
