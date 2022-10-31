package com.greencommute.job.vo;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
public class Location {

    private int id;
    private String state;
    private String city;
    private String locationName;
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
