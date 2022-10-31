package com.greencommute.location.service;

import com.greencommute.location.entity.Location;

import java.util.List;

public interface LocationService {

    List<Location> findAll();
    Location findById(int id);
}
