package com.greencommute.location.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String state;
    private String city;
    @Column(name="location")
    private String locationName;
    @Column(name="pincode")
    private String pinCode;
    private int aqiIndex;

    public Location(String state, String city, String location, String pincode, int aqiIndex) {
        this.state = state;
        this.city = city;
        this.locationName = location;
        this.pinCode = pincode;
        this.aqiIndex = aqiIndex;
    }
}
