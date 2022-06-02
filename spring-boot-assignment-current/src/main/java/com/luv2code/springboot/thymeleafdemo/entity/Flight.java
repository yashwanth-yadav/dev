package com.luv2code.springboot.thymeleafdemo.entity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="flightschedule1")
public class Flight {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="flight_name")
    @NotNull(message = "Username can not be null!!")
    @NotEmpty(message = "Username can not be empty!!")
    private String flightName;

    @Column(name="arrival_time")
    @NotNull(message = "Username can not be null!!")
    @NotEmpty(message = "Username can not be empty!!")
    private String arrivalTime;

    @Column(name="gate_no")
    private String gateNo;

    public Flight() {
    }

    public Flight(int id, String flightName, String arrivalTime, String email) {
        this.id = id;
        this.flightName = flightName;
        this.arrivalTime = arrivalTime;
        this.gateNo = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFlightName() {
        return flightName;
    }

    public void setFlightName(String flightName) {
        this.flightName = flightName;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getGateNo() {
        return gateNo;
    }

    public void setGateNo(String gateNo) {
        this.gateNo = gateNo;
    }

    @Override
    public String toString() {
        return "flightschedule{" +
                "id=" + id +
                ", flightName='" + flightName + '\'' +
                ", arrivalTime='" + arrivalTime + '\'' +
                ", gateNo='" + gateNo + '\'' +
                '}';
    }
}
