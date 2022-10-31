package com.greencommute.company.service;

import com.greencommute.company.entity.Company;
import com.greencommute.company.vo.ResponseTemplateVO;

import java.util.List;

public interface CompanyService {

    List<ResponseTemplateVO> findAll();
    ResponseTemplateVO getCompanyWithLocation(int id);
}

