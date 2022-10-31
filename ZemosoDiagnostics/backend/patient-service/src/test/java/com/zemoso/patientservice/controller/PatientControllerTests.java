package com.zemoso.patientservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.entity.Patient;
import com.zemoso.patientservice.exception.InvalidArgumentsException;
import com.zemoso.patientservice.service.PatientService;
import com.zemoso.patientservice.controller.PatientController;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(PatientController.class)
class PatientControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PatientService patientService;

    ObjectWriter ow=new ObjectMapper().writer().withDefaultPrettyPrinter();
    @Test
    void postValidPatient() throws Exception{
        PatientDto patient=new PatientDto(9,"1","others","luffy","19","Male");
        when(patientService.savePatient(patient)).thenReturn(patient);

        mockMvc.perform(post("/patients/")
                .contentType(MediaType.APPLICATION_JSON).
                content(ow.writeValueAsString(patient)))
                .andExpect(status().isOk())
                .andDo(print());

    }

    @Test
    void postInValidPatient() throws Exception{
        PatientDto patient=new PatientDto(9,null,null,null,"19",null);
        when(patientService.savePatient(patient)).thenThrow(new InvalidArgumentsException("Enter details properly"));

        mockMvc.perform(post("/patients/")
                        .contentType(MediaType.APPLICATION_JSON).
                        content(ow.writeValueAsString(patient)))
                .andExpect(status().isNotFound())
                .andDo(print());

        verify(patientService,times(1)).savePatient(patient);


    }

    @Test
    void getPatientsByUserId() throws Exception {
        ArrayList<PatientDto> patientDtoArrayList=new ArrayList<>();

        patientDtoArrayList.add(new PatientDto(9,"1","others","luffy","19","Male"));

        when(patientService.findPatientsByUserId("1")).thenReturn(patientDtoArrayList);

        mockMvc.perform(get("/patients/1"))
                .andExpect(status().isOk())
                .andDo(print());

        verify(patientService, times(1)).findPatientsByUserId("1");

    }
}
