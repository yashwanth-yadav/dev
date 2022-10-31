package com.zemoso.patientservice.service;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.entity.Patient;
import com.zemoso.patientservice.repository.PatientRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientServiceImpl implements PatientService{
    @Autowired
    private PatientRepository patientRepository;

    @Override
    public List<PatientDto> findPatientsByUserId(String userId) {
        ModelMapper mapper=new ModelMapper();
        ArrayList<Patient> patientArrayList=patientRepository.findAllByUserId(userId);
        ArrayList<PatientDto> patientDtoArrayList=new ArrayList<>();
        for(Patient patient:patientArrayList){
            patientDtoArrayList.add(mapper.map(patient,PatientDto.class));
        }
        return patientDtoArrayList;
    }

    @Override
    public PatientDto savePatient(PatientDto patientDto) {
        ModelMapper mapper=new ModelMapper();
        Patient patient=mapper.map(patientDto,Patient.class);
        return mapper.map(patientRepository.save(patient),PatientDto.class);
    }
}
