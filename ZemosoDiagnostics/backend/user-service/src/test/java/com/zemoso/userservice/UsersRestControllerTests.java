package com.zemoso.userservice;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.zemoso.userservice.api.controller.UsersRestController;
import com.zemoso.userservice.api.dto.UserDto;
import com.zemoso.userservice.api.exception.UserNotFoundException;
import com.zemoso.userservice.api.service.UsersService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(UsersRestController.class)
class UsersRestControllerTests {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    UsersService usersService;

    ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();

    @Test
    void load_GetMapping_Users() throws Exception{
        List<UserDto> userDtosList=new ArrayList<>();

        userDtosList.add(new UserDto("1","Patrick","patrick@gmail.com"));

        when(usersService.getUsers()).thenReturn(userDtosList);

        mockMvc
                .perform(get("/users/"))
                .andExpect(status().isOk())
                .andDo(print());

        verify(usersService, times(1)).getUsers();
    }

    @Test
    void load_PostMapping_SaveValidUser() throws Exception{

        UserDto userDto=new UserDto("1","Patrick","patrick@gmail.com");

        when(usersService.saveUser(userDto)).thenReturn(userDto);

        mockMvc.perform(post("/users/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(ow.writeValueAsString(userDto)))
                        .andExpect(status().isOk())
                        .andDo(print());

        verify(usersService,times(1)).saveUser(userDto);
    }

    @Test
    void load_PostMapping_DoNotSaveInValidUser() throws Exception{

        UserDto userDto=new UserDto(null,null,null);

        when(usersService.saveUser(userDto))
                .thenThrow(new UserNotFoundException("Enter details properly"));

        mockMvc.perform(post("/users/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(ow.writeValueAsString(userDto)))
                        .andExpect(status().isNotFound())
                        .andDo(print());

        verify(usersService,times(1)).saveUser(userDto);
    }
}
