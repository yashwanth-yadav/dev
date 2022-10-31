package com.greencommute.location;

import com.greencommute.location.entity.Location;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
class LocationServiceApplicationTests {

	private Location location = new Location();
	@Test
	void applicationContextTest() {
		LocationServiceApplication.main(new String[] {});
		location.setId(1);
		Assertions.assertEquals(1, location.getId());
	}

}
