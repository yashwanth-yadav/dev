package com.zemoso.labservice.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LabDto {

    private int labId;
    private String name;
    private String testName;
    private double rating;
    private int slotsAvailable;
    private double price;
}
