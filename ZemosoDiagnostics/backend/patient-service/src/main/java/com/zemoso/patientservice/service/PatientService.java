package com.zemoso.patientservice.service;

import com.zemoso.patientservice.dto.PatientDto;

import java.util.List;

public interface PatientService {
    List<PatientDto> findPatientsByUserId(String userId);

    PatientDto savePatient(PatientDto patient);
}
