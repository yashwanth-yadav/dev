package com.zemoso.patientservice.repository;

import com.zemoso.patientservice.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Integer> {
    @Query(
            value = "SELECT * FROM patient a WHERE a.user_id = ?1",
            nativeQuery = true)
    ArrayList<Patient> findAllByUserId(String userId);
}
