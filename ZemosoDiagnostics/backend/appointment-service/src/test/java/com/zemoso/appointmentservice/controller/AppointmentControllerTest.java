package com.zemoso.appointmentservice.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;


import com.zemoso.appointmentservice.controllers.AppointmentController;
import com.zemoso.appointmentservice.dto.AppointmentDTO;
import com.zemoso.appointmentservice.exception.AppointmentNotFoundException;
import com.zemoso.appointmentservice.services.AppointmentService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import java.util.ArrayList;
import java.util.List;


import static org.assertj.core.internal.bytebuddy.matcher.ElementMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(AppointmentController.class)
class AppointmentControllerTest {



    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AppointmentService appointmentService;



    ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();





    @Test
    void getAllAppointments() throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        List<AppointmentDTO> data = new ArrayList<>();
        AppointmentDTO appointmentDTO = new AppointmentDTO(1, 1, 1, "feb", "13", "04:00 - 05:00 PM");
        data.add(appointmentDTO);
        String requestJson = mapper.writeValueAsString(data);
        doReturn(data).when(appointmentService).findAllAppointments("1");
        mockMvc.perform(get("/appointments/1"))
                .andExpect(status().isOk())
                .andDo(print());
    }
   @Test
    void postValidAppointment() throws Exception {
        AppointmentDTO appointmentDTO = new AppointmentDTO(1, 1,1, "January", "13", "04:00 - 5:00 PM");
        when(appointmentService.saveAppointment(appointmentDTO)).thenReturn(appointmentDTO);
        mockMvc.perform(post("/appointments/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(ow.writeValueAsString(appointmentDTO)))
                .andExpect(status().isOk())
                .andDo(print());
   }

   @Test
    void testInvalidPostAppointmentData() throws Exception {
       AppointmentDTO appointmentDTO = new AppointmentDTO(1, -1,-1, null, null, null);
       when(appointmentService.saveAppointment(appointmentDTO)).thenThrow(new AppointmentNotFoundException("entered invalid patient id"));
       mockMvc.perform(post("/appointments/")
                       .contentType(MediaType.APPLICATION_JSON)
                       .content(ow.writeValueAsString(appointmentDTO)))
               .andExpect(status().isBadRequest())
               .andDo(print());

       verify(appointmentService, times(1)).saveAppointment(appointmentDTO);
   }
}