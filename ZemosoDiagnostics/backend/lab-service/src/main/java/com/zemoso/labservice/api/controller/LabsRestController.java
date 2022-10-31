package com.zemoso.labservice.api.controller;

import com.zemoso.labservice.api.dto.LabDto;
import com.zemoso.labservice.api.service.LabsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/labs")
public class LabsRestController {
    @Autowired
    private LabsService labsService;

    @GetMapping("/")
    public List<LabDto> getLabs() {
        return labsService.getLabs();
    }

}
