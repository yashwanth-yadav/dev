package com.greencommute.company.vo;

import com.greencommute.company.entity.Company;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class ResponseTemplateVO {
    private Company company;
    private Location location;

    public ResponseTemplateVO(Company company, Location location) {
        this.company = company;
        this.location = location;
    }
}
