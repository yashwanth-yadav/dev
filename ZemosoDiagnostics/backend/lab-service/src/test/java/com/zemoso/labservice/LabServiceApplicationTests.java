package com.zemoso.labservice;

import com.zemoso.labservice.api.dto.LabDto;
import com.zemoso.labservice.api.entity.Lab;
import com.zemoso.labservice.api.repository.LabsRepository;
import com.zemoso.labservice.api.service.LabsService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class LabServiceApplicationTests {

	@Autowired
	LabsService labsService;

	@MockBean
	LabsRepository labsRepository;

	@Test
	void findAllLabs() {
		List<Lab> labsList=new ArrayList<>();
		Lab  lab1=new Lab(1,"Los Altos Center Lab","COVID RT-PCR Test",4.3,4,1200);
		labsList.add(lab1);

		List<LabDto> labDtoList=new ArrayList<>();
		LabDto labDto=new LabDto(1,"Los Altos Center Lab","COVID RT-PCR Test",4.3,4,1200);

		labDtoList.add(labDto);

		when(labsRepository.findAll())
				.thenReturn(labsList);

		assertEquals(labDtoList,labsService.getLabs());
	}

}
