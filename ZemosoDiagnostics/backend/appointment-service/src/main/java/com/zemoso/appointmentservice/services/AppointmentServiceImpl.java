package com.zemoso.appointmentservice.services;

import com.zemoso.appointmentservice.dto.AppointmentDTO;
import com.zemoso.appointmentservice.entity.Appointment;
import com.zemoso.appointmentservice.exception.AppointmentNotFoundException;
import com.zemoso.appointmentservice.repository.AppointmentRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Override
    public AppointmentDTO saveAppointment(AppointmentDTO appointmentDTO) {
        if (!checkIfPatientsExists(appointmentDTO.getPatientId())) {
            throw new AppointmentNotFoundException("entered wrong patient id");
        }
        if (!checkIfLabExists(appointmentDTO.getLabId())) {
            throw new AppointmentNotFoundException("entered wrong lab id");
        }
        ModelMapper mapper = new ModelMapper();
        Appointment appointment = mapper.map(appointmentDTO,Appointment.class);
        return mapper.map(appointmentRepository.save(appointment), AppointmentDTO.class);

    }

    private boolean checkIfPatientsExists(Integer patientId) {
        return (appointmentRepository.checkIfPatientExists(patientId) != 0);
    }

    private boolean checkIfLabExists(Integer labId) {
        return (appointmentRepository.checkIfLabExists(labId) != 0);
    }

    private boolean checkIfUserExists(String userId) {
        return (appointmentRepository.checkIfUserExists(userId) != null);
    }
    @Override
    public List<AppointmentDTO> findAllAppointments(String userId) {
        if (!checkIfUserExists(userId)) {
            throw new AppointmentNotFoundException("user id does not exists");
        }
        ModelMapper mapper = new ModelMapper();
        List<Appointment> appointments = appointmentRepository.getAllAppointmentsByUserId(userId);
        List<AppointmentDTO> appointmentsDTOArrayList= new ArrayList<>();
        for (Appointment appointment : appointments) {
            appointmentsDTOArrayList.add(mapper.map(appointment, AppointmentDTO.class));
        }
        return appointmentsDTOArrayList;
    }
}
