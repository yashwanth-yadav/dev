package com.zemoso.labservice.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="lab")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Lab {
    @Id
    @Column(name="lab_id")
    private int labId;

    @Column(name="name")
    private String name;

    @Column(name="test_name")
    private String testName;

    @Column(name="rating")
    private double rating;

    @Column(name="slots_available")
    private int slotsAvailable;

    @Column(name="price")
    private double price;
}
