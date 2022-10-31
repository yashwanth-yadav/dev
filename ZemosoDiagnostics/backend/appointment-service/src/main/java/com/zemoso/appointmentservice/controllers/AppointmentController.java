package com.zemoso.appointmentservice.controllers;

import com.zemoso.appointmentservice.dto.AppointmentDTO;
import com.zemoso.appointmentservice.exception.AppointmentNotFoundException;
import com.zemoso.appointmentservice.exception.InvalidArguments;
import com.zemoso.appointmentservice.services.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/")
    public AppointmentDTO saveAppointment(@RequestBody AppointmentDTO appointmentDTO) throws InvalidArguments {
        try {
          return appointmentService.saveAppointment(appointmentDTO);
        } catch(Exception e) {
            throw new InvalidArguments(e.getMessage());
        }
    }

    @GetMapping("/{userId}")
    public List<AppointmentDTO> getAppointments(@PathVariable(name="userId") String userId) {
        return appointmentService.findAllAppointments(userId);
    }
}
