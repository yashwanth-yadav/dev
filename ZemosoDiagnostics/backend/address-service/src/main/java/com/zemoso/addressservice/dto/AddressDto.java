package com.zemoso.addressservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto {
    private int id;
    private  String userId;
    private String area;
    private int zipCode;
    private String city;
    private String houseNo;




}
