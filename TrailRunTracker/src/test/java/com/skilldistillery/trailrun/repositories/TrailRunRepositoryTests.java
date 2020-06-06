package com.skilldistillery.trailrun.repositories;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.trailrun.entities.TrailRun;

@SpringBootTest
class TrailRunRepositoryTests {

	@Autowired
	TrailRunRepository trRepo;
	
	
	@Test
	@DisplayName("Testing basic repo workings")
	void test1() {
		List<TrailRun> trailRuns = trRepo.findAll();
		assertNotNull(trailRuns);
		assertEquals(true, trailRuns.size() > 0);
	}

}
