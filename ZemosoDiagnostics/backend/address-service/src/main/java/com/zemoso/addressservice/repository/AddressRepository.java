package com.zemoso.addressservice.repository;

import com.zemoso.addressservice.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {
    @Query(
            value = "SELECT * FROM address a inner join user u on u.user_id = a.user_id WHERE a.user_id = ?1",
            nativeQuery = true)
    ArrayList<Address> findAllById(String userId);

    @Query(
            value = "SELECT u.user_id FROM user u  WHERE u.user_id = ?1",
            nativeQuery = true)
    String checkIfUserExists(String userId);
}
