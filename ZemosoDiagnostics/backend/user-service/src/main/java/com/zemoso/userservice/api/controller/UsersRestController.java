package com.zemoso.userservice.api.controller;

import com.zemoso.userservice.api.dto.UserDto;
import com.zemoso.userservice.api.exception.UserNotFoundException;
import com.zemoso.userservice.api.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersRestController {
    @Autowired
    private UsersService usersService;

    @GetMapping("/")
    public List<UserDto> getSaveJobs() {
        return usersService.getUsers();
    }

    @PostMapping("/")
    public UserDto saveUser(@RequestBody UserDto userDto){
        try{
            return usersService.saveUser(userDto);
        }
        catch (Exception e){
            throw new UserNotFoundException("Enter details properly");
        }
    }
}
