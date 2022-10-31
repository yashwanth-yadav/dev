package com.greencommute.location.service;

import com.greencommute.location.entity.Location;
import com.greencommute.location.exception.ResourceNotFoundException;
import com.greencommute.location.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {
    @Autowired
    private LocationRepository locationRepository;

    @Override
    public List<Location> findAll() {
        return locationRepository.findAll();
    }

    @Override
    public Location findById(int id) {

        return (locationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found location with id = " + id)));

    }
}
