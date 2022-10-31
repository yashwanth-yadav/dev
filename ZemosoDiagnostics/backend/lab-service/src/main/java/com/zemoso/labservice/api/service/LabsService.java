package com.zemoso.labservice.api.service;

import com.zemoso.labservice.api.dto.LabDto;

import java.util.List;

public interface LabsService {
    List<LabDto> getLabs();
}
