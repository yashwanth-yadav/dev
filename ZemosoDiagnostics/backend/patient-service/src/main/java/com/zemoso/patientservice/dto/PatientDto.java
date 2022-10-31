package com.zemoso.patientservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientDto {
    private int patientId;
    private String userId;
    private String relation;
    private String name;
    private String age;
    private String gender;
}
