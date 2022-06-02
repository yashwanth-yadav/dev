package com.luv2code.springboot.thymeleafdemo;

import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.luv2code.springboot.thymeleafdemo.entity.Flight;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringMockitoApplicationTests {
    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext context;

    ObjectMapper om = new ObjectMapper();

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @Test
    public void addFlightTest() throws Exception {
        Flight flight = new Flight(1, "Pushpakavimanam", "20 pm", "vaikuntam");
        String jsonRequest = om.writeValueAsString(flight);
        MvcResult result = mockMvc.perform(post("/flights/save").content(jsonRequest).content(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isBadRequest()).andReturn();
//        String resultContent = result.getResponse().getContentAsString();
//        Response response = om.readValue(resultContent, Response.class);
        String content = result.getResponse().getContentAsString();
        Assert.assertEquals(content, "");


    }

    @Test
    public void getFlightsTest() throws Exception {
        MvcResult result = mockMvc
                .perform(get("/flights/list").content(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent = result.getResponse().getContentAsString();
//        Response response = om.readValue(resultContent, Response.class);
//        Assert.assertTrue(response.isStatus() == Boolean.TRUE);

//        String content = result.getResponse().getContentAsString();
//        Assert.assertEquals(content, "");


    }
}
