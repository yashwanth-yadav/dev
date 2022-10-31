package com.greencommute.company.service;

import com.greencommute.company.entity.Company;
import com.greencommute.company.exception.ResourceNotFoundException;
import com.greencommute.company.repository.CompanyRepository;
import com.greencommute.company.vo.Location;
import com.greencommute.company.vo.ResponseTemplateVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;


@Service
public class CompanyServiceImpl implements CompanyService{
    @Autowired
    private CompanyRepository companyRepository;

    @Value("${LOCATIONS_LIST_API_URL}")
    private  String locationListApiUrl;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public List<ResponseTemplateVO> findAll() {
        List<ResponseTemplateVO> voList = new ArrayList<>();
        List<Company> companyList = companyRepository.findAll();

        ResponseEntity<Location[]> response =  restTemplate.getForEntity(locationListApiUrl , Location[].class);

        Location[] locationList = response.getBody();
        Map<Integer,Location> locationMap = new HashMap<>();
        Arrays.stream(locationList).forEach(loc -> locationMap.put(loc.getId(), loc));

        for (Company company:companyList
        ) {

            if(locationMap.containsKey(company.getLocationId()))
            {
                ResponseTemplateVO vo = new ResponseTemplateVO();
                vo.setCompany(company);
                vo.setLocation(locationMap.get(company.getLocationId()));
                voList.add(vo);

            }
        }
        return voList;
    }

    @Override
    public ResponseTemplateVO getCompanyWithLocation(int id){
        ResponseTemplateVO vo = new ResponseTemplateVO();
        Company result = companyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found company with id = " + id));
        Location location = restTemplate.getForObject(locationListApiUrl + result.getLocationId(), Location.class);
        vo.setCompany(result);
        vo.setLocation(location);
        return vo;
    }
}
