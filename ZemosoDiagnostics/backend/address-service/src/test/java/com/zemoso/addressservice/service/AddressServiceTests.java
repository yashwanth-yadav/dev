package com.zemoso.addressservice.service;


import com.zemoso.addressservice.dto.AddressDto;
import com.zemoso.addressservice.entity.Address;
import com.zemoso.addressservice.exception.UserNotFoundException;
import com.zemoso.addressservice.repository.AddressRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest()
@AutoConfigureMockMvc
 class AddressServiceTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private AddressService addressService;

    @MockBean
    private AddressRepository addressRepository;

    @Test
    void saveValidAddress()
    {
       ModelMapper mapper = new ModelMapper();
       AddressDto addressDto=new AddressDto(3,"kiran","abc", 500015,"Hyd","2451-18/41");
       Address address= mapper.map(addressDto, Address.class);
       when(addressRepository.save(address)).thenReturn(address);
       addressService.saveAddress(addressDto);
       verify(addressRepository,times(1)).save(address);
    }

    @Test
    void test_to_getAllAddressIfUserExists()
    {


       ModelMapper mapper = new ModelMapper();

       Address address=new Address(3,"kiran","abc", 500015,"Hyd","2451-18/41");
       Address address1=new Address(4,"kiran","abc", 500015,"Hyd","2451-18/41");
       ArrayList<Address> addressArrayList = new ArrayList<>();
       addressArrayList.add(address1);
       addressArrayList.add(address);
       when(addressRepository.checkIfUserExists("kiran")).thenReturn("kiran");
       when(addressRepository.findAllById("kiran")).thenReturn(addressArrayList);
       addressService.getAddressByUserId("kiran");
       ArrayList<AddressDto> addressDtoArrayList = new ArrayList<>();
       for (Address address2 : addressArrayList) {
          addressDtoArrayList.add(mapper.map(address, AddressDto.class));
       }
       assertEquals(2, addressService.getAddressByUserId("kiran").size());

    }



   @Test()
    void test_to_throwExceptionIfUserDoesNotExists()
   {


     assertThrows(UserNotFoundException.class, () -> {
        addressService.getAddressByUserId("abc");
     });

   }


}
