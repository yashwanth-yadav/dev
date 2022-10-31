package com.zemoso.labservice.api.repository;

import com.zemoso.labservice.api.entity.Lab;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LabsRepository extends JpaRepository<Lab,Integer> {

}
