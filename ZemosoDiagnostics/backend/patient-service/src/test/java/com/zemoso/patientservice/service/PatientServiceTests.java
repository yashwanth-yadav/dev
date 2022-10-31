package com.zemoso.patientservice.service;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.entity.Patient;
import com.zemoso.patientservice.repository.PatientRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest()
@AutoConfigureMockMvc
class PatientServiceTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private PatientService patientService;

    @MockBean
    private PatientRepository patientRepository;

    Patient patient1=new Patient(9,"1","others","luffy","19","Male");
    Patient patient2=new Patient(8,"1qwxq","others","zoro","22","Male");

    @Test
    void saveValidPatient()
    {
        ModelMapper mapper=new ModelMapper();
        PatientDto patientDto=new PatientDto(9,"1","others","luffy","19","Male");
        Patient patient=mapper.map(patientDto,Patient.class);
        when(patientRepository.save(patient)).thenReturn(patient);
        patientService.savePatient(patientDto);
        verify(patientRepository,times(1)).save(patient);
    }





    @Test
    void findPatientsByIdUserId() {
        ModelMapper mapper = new ModelMapper();
        String id="1qwxq";
        List<Patient> patientList=new ArrayList<>();
        patientList.add(patient1);
        patientList.add(patient2);
        when(patientRepository.findAllByUserId(id)).thenReturn((ArrayList<Patient>) patientList);
        ArrayList<PatientDto> patientDtoArrayList = new ArrayList<>();
        for (Patient patient : patientList) {
            patientDtoArrayList.add(mapper.map(patient, PatientDto.class));
        }

        assertEquals(2, patientService.findPatientsByUserId(id).size());    }
}
