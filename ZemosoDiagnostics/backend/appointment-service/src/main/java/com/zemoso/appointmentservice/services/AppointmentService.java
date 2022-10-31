package com.zemoso.appointmentservice.services;

import com.zemoso.appointmentservice.dto.AppointmentDTO;
import com.zemoso.appointmentservice.entity.Appointment;
import com.zemoso.appointmentservice.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


public interface AppointmentService {


   AppointmentDTO saveAppointment(AppointmentDTO appointmentDTO);

    List<AppointmentDTO> findAllAppointments(String userId);

}
