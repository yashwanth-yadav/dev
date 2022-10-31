package com.greencommute.company.vo;
import lombok.*;

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


    public Location(int id, String state, String city, String location, String pinCode, int aqiIndex) {
        this.id = id;
        this.state = state;
        this.city = city;
        this.locationName = location;
        this.pinCode = pinCode;
        this.aqiIndex = aqiIndex;
    }
}
