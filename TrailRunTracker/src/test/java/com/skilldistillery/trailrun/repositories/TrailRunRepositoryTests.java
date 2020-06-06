package com.skilldistillery.trailrun.repositories;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.trailrun.entities.TrailRun;
import com.skilldistillery.trailrun.entities.TrailType;

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
	
	@Test
	@DisplayName("Test of find by TrailType Enum method")
	void test2() {
		List<TrailRun> trailRuns = trRepo.findByTrailType(TrailType.LIGHT);
		assertNotNull(trailRuns);
		assertEquals(true, trailRuns.size() > 0);
	}
	
	@Test
	@DisplayName("Test of find by distance range query method")
	void test3() {
		List<TrailRun> trailRuns = trRepo.queryByDistanceInRange(1.0, 4.0);
		assertNotNull(trailRuns);
		assertEquals(true, trailRuns.size() > 0);
	}
	
	@Test
	@DisplayName("Test of find by location keyword method")
	void test4() {
		List<TrailRun> trailRuns = trRepo.findByLocationContaining("Golden");
		assertNotNull(trailRuns);
		assertEquals(true, trailRuns.size() > 0);
	}
	
	@Test
	@DisplayName("Test of find runs by minimum distance")
	void test5() {
		List<TrailRun> trailRuns = trRepo.findByDistanceGreaterThanEqual(7.00);
		assertNotNull(trailRuns);
		assertEquals(true, trailRuns.size() > 0);
	}

}
