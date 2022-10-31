package com.zemoso.appointmentservice.service;


import com.zemoso.appointmentservice.dto.AppointmentDTO;
import com.zemoso.appointmentservice.entity.Appointment;
import com.zemoso.appointmentservice.exception.AppointmentNotFoundException;
import com.zemoso.appointmentservice.repository.AppointmentRepository;
import com.zemoso.appointmentservice.services.AppointmentService;
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

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest()
@AutoConfigureMockMvc
class AppointmentServiceImplTest {

    @Autowired
    private AppointmentService appointmentService;

    @MockBean
    private AppointmentRepository appointmentRepository;

    @Test
    void saveValidAppointment()
    {
        ModelMapper mapper = new ModelMapper();
        AppointmentDTO appointmentDTO=new AppointmentDTO(1, 1, 1, "Feb", "13", "3:00-4:00 AM");
        Appointment appointment = new Appointment(1, 1, 1, "Feb", "13", "3:00-4:00 AM");
        when(appointmentRepository.checkIfPatientExists(1)).thenReturn(1);
        when(appointmentRepository.checkIfLabExists(1)).thenReturn(1);
        when(appointmentRepository.save(appointment)).thenReturn(appointment);

        appointmentService.saveAppointment(appointmentDTO);
        verify(appointmentRepository, times(1)).save(appointment);
    }

    @Test
    void getAppointmentsTest() {
        ModelMapper mapper = new ModelMapper();
        Appointment appointment = new Appointment(1, 1, 1, "feb", "13", "04:00 - 05:00 PM");
        List<Appointment> appointmentList = new ArrayList<>();
        appointmentList.add(appointment);
        when(appointmentRepository.checkIfUserExists("dharaneesh")).thenReturn("dharaneesh");
        when(appointmentRepository.getAllAppointmentsByUserId("dharaneesh")).thenReturn(appointmentList);
        appointmentService.findAllAppointments("dharaneesh");
        List<AppointmentDTO> appointmentDTOList = new ArrayList<>();
        for (Appointment appointments: appointmentList) {
            appointmentDTOList.add(mapper.map(appointments, AppointmentDTO.class));
        }
        assertEquals(1, appointmentService.findAllAppointments("dharaneesh").size());
    }

    @Test
    void test_to_throwExceptionIfUserDoesNotExists()
    {
        assertThrows(AppointmentNotFoundException.class, () -> {
            appointmentService.findAllAppointments("abc");
        });
    }

    @Test
    void test_to_throwExceptionIfPatientDoesNotExists()
    {
       when(appointmentRepository.checkIfPatientExists(1)).thenReturn(0);
        AppointmentDTO appointmentDTO=new AppointmentDTO(1, 1, 1, "Feb", "13", "3:00-4:00 AM");
        assertThrows(AppointmentNotFoundException.class, () -> {
            appointmentService.saveAppointment(appointmentDTO);
        });
    }
    @Test
    void test_to_throwExceptionIfLabDoesNotExists()
    {
        AppointmentDTO appointmentDTO = new AppointmentDTO(1, 1, 1, "feb", "13", "04:00 - 05:00 PM");
        when(appointmentRepository.checkIfPatientExists(1)).thenReturn(1);
        when(appointmentRepository.checkIfLabExists(1)).thenReturn(0);
        assertThrows(AppointmentNotFoundException.class, () -> {
            appointmentService.saveAppointment(appointmentDTO);
        });
    }


}