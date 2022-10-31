package com.greencommute.company.controller;

import com.greencommute.company.entity.Company;
import com.greencommute.company.service.CompanyService;
import com.greencommute.company.vo.ResponseTemplateVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/companies")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @CrossOrigin
    @GetMapping("/")
    @Transactional(readOnly = true)
    public List<ResponseTemplateVO> getAll() {
        return companyService.findAll();

    }

    @CrossOrigin
    @GetMapping("/{id}")
    @Transactional(readOnly = true)
    public ResponseTemplateVO getCompanyWithLocation(@PathVariable("id") int id){
        return companyService.getCompanyWithLocation(id);
    }
}
