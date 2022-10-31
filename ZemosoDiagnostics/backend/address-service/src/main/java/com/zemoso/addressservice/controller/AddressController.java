package com.zemoso.addressservice.controller;
import com.zemoso.addressservice.dto.AddressDto;
import com.zemoso.addressservice.exception.InvalidArguments;
import com.zemoso.addressservice.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/addresses")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping(value = "/")
    public AddressDto saveAddress(@RequestBody AddressDto addressDto) throws InvalidArguments {
        try {

            return addressService.saveAddress(addressDto);
        }
        catch(Exception e)
        {
           throw  new InvalidArguments("Please, enter details properly");
        }
    }

    @GetMapping(value="/{userId}")
    public List<AddressDto> getAddressByUserId(@PathVariable String userId)
    {
            return addressService.getAddressByUserId(userId) ;

    }



}
