package com.zemoso.userservice;

import com.zemoso.userservice.api.dto.UserDto;
import com.zemoso.userservice.api.entity.User;
import com.zemoso.userservice.api.exception.UserNotFoundException;
import com.zemoso.userservice.api.repository.UsersRepository;
import com.zemoso.userservice.api.service.UsersService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest
class UserServiceApplicationTests {

	@Autowired
	UsersService usersService;

	@MockBean
	UsersRepository usersRepository;

	@Test
	void findAllUsers() {
		List<User> userList=new ArrayList<>();
		List<UserDto> userDtosList=new ArrayList<>();

		User user=new User("1","Patrick","patrick@gmail.com");
		UserDto userDto=new UserDto("1","Patrick","patrick@gmail.com");

		userList.add(user);
		userDtosList.add(userDto);

		when(usersRepository.findAll())
				.thenReturn(userList);

		assertEquals(userDtosList,usersService.getUsers());
	}

	@Test
	void when_ValidUser_SaveUser(){
		User user=new User("1","Patrick","patrick@gmail.com");
		UserDto userDto=new UserDto("1","Patrick","patrick@gmail.com");
		usersService.saveUser(userDto);
		verify(usersRepository,times(1)).save(user);
	}

	@Test
	void when_InvalidUser_DoNotSaveUser() {
		User user = new User(null,null,null);
		UserDto userDto=new UserDto(null,null,null);
		when(usersRepository.save(user))
				.thenThrow(new UserNotFoundException("Enter details properly"));
		assertThrows(UserNotFoundException.class, () -> usersService.saveUser(userDto));
	}

}
