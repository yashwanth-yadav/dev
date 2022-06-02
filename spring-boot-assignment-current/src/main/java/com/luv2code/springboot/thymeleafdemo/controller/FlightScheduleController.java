package com.luv2code.springboot.thymeleafdemo.controller;


import com.luv2code.springboot.thymeleafdemo.entity.Flight;
import com.luv2code.springboot.thymeleafdemo.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/flights")
public class FlightScheduleController {

    @Autowired
    private FlightService flightService;


//    public FlightScheduleController(FlightService flightService1){
//        flightService = flightService1;
//    }


    @GetMapping("/list")
    public String listEmployees(Model theModel){
        List<Flight> theFlights = flightService.findAll();
        theModel.addAttribute("flights", theFlights);
        return "list-flights";
    }

    @GetMapping("/showFormForAdd")
    public String showFormForAdd(Model theModel){
        Flight theFlight =new Flight();
        theModel.addAttribute("flights", theFlight);
        return "flights/flight-form";
    }
    @GetMapping("/showFormForUpdate")
    public String showFormForUpdate(@RequestParam("flightId") int theId,Model theModal){
        Flight theFlight = flightService.findById(theId);
        theModal.addAttribute("flights", theFlight);
        return "flights/flight-form";

    }
    @PostMapping("/save")
    public String saveEmployee(@Valid @ModelAttribute("flight") Flight theFlight){
        flightService.save(theFlight);
        return "redirect:/flights/list";
    }
    @GetMapping("/delete")
    public String delete(@RequestParam("flightId") int theId){
        flightService.deleteById(theId);
        return "redirect:/flights/list";
    }

    @RequestMapping(path = {"/search"})
    public String home(Flight shop, Model model, String keyword) {
        if(keyword!=null) {
            List<Flight> list = flightService.getByKeyword(keyword);
            model.addAttribute("flights", list);
        }else {
            List<Flight> list = flightService.findAll();
            model.addAttribute("flights", list);}
        return "list-flights";
    }


}
