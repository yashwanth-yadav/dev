package com.greencommute.job;

import com.greencommute.job.entity.Job;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class JobServiceApplicationTests {

	private Job job = new Job();
	@Test
	void applicationContextTest() {
		JobServiceApplication.main(new String[] {});
		job.setId(1);
		Assertions.assertEquals(1, job.getId());
	}

}
