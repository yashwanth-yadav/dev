package com.zemoso.userservice.api.repository;

import com.zemoso.userservice.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<User,Integer> {

}
