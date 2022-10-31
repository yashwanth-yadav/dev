package com.zemoso.addressservice.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.zemoso.addressservice.dto.AddressDto;

import com.zemoso.addressservice.exception.InvalidArguments;

import com.zemoso.addressservice.service.AddressService;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;


import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(AddressController.class)
class AddressControllerTests {



    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AddressService addressService;

    ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();





    @Test
    void postValidAddressData() throws Exception {

        AddressDto address = new AddressDto(1,"kiran", "abc", 500015, "Hyd", "2451-18/41");


        when(addressService.saveAddress(address)).thenReturn(address);

        mockMvc.perform(post("/addresses/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(ow.writeValueAsString(address)))
                .andExpect(status().isOk())
                .andDo(print());


  verify(addressService,times(1)).saveAddress(address);

    }



    @Test
    void testForInvalidAddressData() throws Exception {

        AddressDto address = new AddressDto( 0, null, "", 0, "", "");

        when(addressService.saveAddress(address)).thenThrow(new InvalidArguments("Enter valid details"));

        mockMvc.perform(post("/addresses/")
                        .contentType(MediaType.APPLICATION_JSON)
                .content(ow.writeValueAsString(address)))
                .andExpect(status().isBadRequest())
                .andDo(print());


        verify(addressService,times(1)).saveAddress(address);


    }


@Test
    void test_to_get_AllAddressForAGivenUserId() throws Exception {
        ArrayList<AddressDto> addressDtoList=new ArrayList<>();

        addressDtoList.add(new AddressDto( 0, "kiran", "", 0, "", ""));

        when(addressService.getAddressByUserId("kiran")).thenReturn(addressDtoList);

        mockMvc
                .perform(get("/addresses/kiran"))
                .andExpect(status().isOk())
                .andDo(print());

        verify(addressService, times(1)).getAddressByUserId("kiran");

    }

}
