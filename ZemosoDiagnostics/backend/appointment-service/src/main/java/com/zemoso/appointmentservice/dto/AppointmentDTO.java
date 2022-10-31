package com.zemoso.appointmentservice.dto;

import lombok.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDTO {

    private int id;
    private int patientId;
    private int labId;
    private String month;
    private String date;
    private String time;

}