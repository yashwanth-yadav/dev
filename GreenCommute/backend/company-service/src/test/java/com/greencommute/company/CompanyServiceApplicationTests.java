package com.greencommute.company;

import com.greencommute.company.entity.Company;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CompanyServiceApplicationTests {

	private Company company = new Company();
	@Test
	void applicationContextTest() {
		CompanyServiceApplication.main(new String[] {});
		company.setId(1);
		Assertions.assertEquals(1, company.getId());
	}
}
