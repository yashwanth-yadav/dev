package com.zemoso.labservice;

import com.zemoso.labservice.api.controller.LabsRestController;
import com.zemoso.labservice.api.dto.LabDto;
import com.zemoso.labservice.api.service.LabsService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(LabsRestController.class)
class LabsRestControllerTests {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    LabsService labsService;

    @Test
    void load_GetMapping_Labs() throws Exception{
        List<LabDto> labDtoList=new ArrayList<>();
        labDtoList.add(new LabDto(1,"Los Altos Center Lab","COVID RT-PCR Test",4.3,4,1200));

        when(labsService.getLabs()).thenReturn(labDtoList);

        mockMvc
                .perform(get("/labs/"))
                .andExpect(status().isOk())
                .andDo(print());

        verify(labsService, times(1)).getLabs();
    }
}
