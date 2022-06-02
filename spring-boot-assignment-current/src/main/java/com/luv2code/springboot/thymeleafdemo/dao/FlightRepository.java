package com.luv2code.springboot.thymeleafdemo.dao;

import com.luv2code.springboot.thymeleafdemo.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FlightRepository extends JpaRepository<Flight,Integer> {
    public List<Flight> findAllByOrderByArrivalTimeAsc();
    @Query(value = "select * from flightschedule s where s.flight_name like %:keyword% or s.gate_no like %:keyword%", nativeQuery = true)
    List<Flight> findByKeyword(@Param("keyword") String keyword);
}

