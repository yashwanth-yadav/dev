package com.zemoso.appointmentservice.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "appointment")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {

    @Column(name = "appointment_id")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int patientId;

    private int labId;

    @Column(name = "month")
    private String month;

    @Column(name = "date")
    private String date;

    @Column(name = "time")
    private String time;
}
