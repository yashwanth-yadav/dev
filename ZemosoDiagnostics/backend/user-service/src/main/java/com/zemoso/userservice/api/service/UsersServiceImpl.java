package com.zemoso.userservice.api.service;

import com.zemoso.userservice.api.dto.UserDto;
import com.zemoso.userservice.api.entity.User;
import com.zemoso.userservice.api.repository.UsersRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsersServiceImpl implements UsersService {
    @Autowired
    private UsersRepository usersRepository;

    private static final ModelMapper modelMapper=new ModelMapper();

    public List<UserDto> getUsers() {
        List<User> usersList=usersRepository.findAll();
        List<UserDto> userDtosList=new ArrayList<>();
        for(User user:usersList){
            userDtosList.add(convertToDto(user));
        }
        return userDtosList;
    }

    @Override
    public UserDto saveUser(UserDto userDto) {
        usersRepository.save(convertToEntity(userDto));
        return userDto;
    }

    public static UserDto convertToDto(User user){
        return modelMapper.map(user,UserDto.class);
    }

    public static User convertToEntity(UserDto userDto){
        return modelMapper.map(userDto,User.class);
    }

}
