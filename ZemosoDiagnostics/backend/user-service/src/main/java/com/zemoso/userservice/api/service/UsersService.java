package com.zemoso.userservice.api.service;

import com.zemoso.userservice.api.dto.UserDto;

import java.util.List;

public interface UsersService {
    List<UserDto> getUsers();

    UserDto saveUser(UserDto userDto);
}
