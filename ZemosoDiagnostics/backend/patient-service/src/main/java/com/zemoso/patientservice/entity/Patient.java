package com.zemoso.patientservice.entity;

import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@AllArgsConstructor
@Table(name="patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int patientId;
    private String userId;
    private String relation;
    private String name;
    private String age;
    private String gender;

}
