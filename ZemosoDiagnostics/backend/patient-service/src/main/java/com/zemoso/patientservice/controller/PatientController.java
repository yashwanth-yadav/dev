package com.zemoso.patientservice.controller;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.exception.InvalidArgumentsException;
import com.zemoso.patientservice.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping("/{userId}")
    public List<PatientDto> findPatientsByUserId(@PathVariable("userId") String userId) {
        return patientService.findPatientsByUserId(userId);
    }

    @PostMapping("/")
    public PatientDto savePatient(@RequestBody PatientDto patientDto) throws InvalidArgumentsException{
        try{
            return patientService.savePatient(patientDto);
        }
        catch (Exception e){
            throw new InvalidArgumentsException("Enter details properly");
        }
    }
}
