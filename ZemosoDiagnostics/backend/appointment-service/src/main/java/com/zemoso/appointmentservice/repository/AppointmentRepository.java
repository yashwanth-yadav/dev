package com.zemoso.appointmentservice.repository;

import com.zemoso.appointmentservice.dto.AppointmentDTO;
import com.zemoso.appointmentservice.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

    @Query(value = "SELECT p.patient_id FROM patient p WHERE p.patient_id = ?1", nativeQuery = true)
    Integer checkIfPatientExists(Integer patiendId);

    @Query(value = "SELECT u.user_id FROM user u WHERE u.user_id = ?1", nativeQuery = true)
    String checkIfUserExists(String userId);

    @Query(value = "SELECT l.lab_id FROM lab l WHERE l.lab_id = ?1", nativeQuery = true)
    Integer checkIfLabExists(Integer labId);

    @Query(value="SELECT a.appointment_id, a.patient_id, a.lab_id, a.month, a.date, a.time from appointment a INNER JOIN patient on a.patient_id = patient.patient_id where patient.user_id = ?1", nativeQuery = true)
    List<Appointment> getAllAppointmentsByUserId(String userId);
}
