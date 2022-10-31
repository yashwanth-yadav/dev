package com.zemoso.labservice.api.service;

import com.zemoso.labservice.api.dto.LabDto;
import com.zemoso.labservice.api.entity.Lab;
import com.zemoso.labservice.api.repository.LabsRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LabsServiceImpl implements LabsService {
    @Autowired
    private LabsRepository labsRepository;

    private static final ModelMapper modelMapper=new ModelMapper();

    public List<LabDto> getLabs() {
        List<Lab> labList=labsRepository.findAll();
        List<LabDto> labDtoList=new ArrayList<>();
        for(Lab user:labList){
            labDtoList.add(convertToDto(user));
        }
        return labDtoList;
    }

    public static LabDto convertToDto(Lab lab){
        return modelMapper.map(lab,LabDto.class);
    }

}
