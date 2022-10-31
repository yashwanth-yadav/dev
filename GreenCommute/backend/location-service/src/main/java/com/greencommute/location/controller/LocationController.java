package com.greencommute.location.controller;

import com.greencommute.location.entity.Location;
import com.greencommute.location.service.LocationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/locations")
public class LocationController {

    @Autowired
    private LocationServiceImpl locationService;

    @CrossOrigin
    @GetMapping("/")
    @Transactional(readOnly = true)
    public List<Location> getAll() {
        return locationService.findAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @Transactional(readOnly = true)
    public Location getById(@PathVariable("id") int id) {
        return locationService.findById(id);

    }
}
