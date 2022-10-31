package com.zemoso.addressservice.service;

import com.zemoso.addressservice.dto.AddressDto;

import java.util.ArrayList;

public interface AddressService {
     AddressDto saveAddress(AddressDto addressDto);
     ArrayList<AddressDto> getAddressByUserId(String userId);



}
