package com.zemoso.addressservice.service;

import com.zemoso.addressservice.dto.AddressDto;
import com.zemoso.addressservice.entity.Address;
import com.zemoso.addressservice.exception.UserNotFoundException;
import com.zemoso.addressservice.repository.AddressRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@Slf4j
public class AddressServiceImp implements  AddressService{

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public AddressDto saveAddress(AddressDto addressDto) {
        ModelMapper mapper = new ModelMapper();
        Address address = mapper.map(addressDto,Address.class);
        return mapper.map(addressRepository.save(address),AddressDto.class);

    }

    private  boolean checkIfUserExists(String userId)
    {
      String userExists =  addressRepository.checkIfUserExists(userId);
        return userExists == null;


    }

    @Override
    public ArrayList<AddressDto> getAddressByUserId(String userId)  {
           if(checkIfUserExists(userId)){
               throw new UserNotFoundException("User with id " + userId+" does not exists");

           }
           else {
               ModelMapper mapper = new ModelMapper();
               ArrayList<Address> addressArrayList = addressRepository.findAllById(userId);
               ArrayList<AddressDto> addressDtoArrayList = new ArrayList<>();
               for (Address address : addressArrayList) {
                   addressDtoArrayList.add(mapper.map(address, AddressDto.class));
               }
               return addressDtoArrayList;
           }

    }
}
