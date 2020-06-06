package com.skilldistillery.trailrun.entities;



import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class TrailRunTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private TrailRun trailRun;
	

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("TrailRunTrackerPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		trailRun = em.find(TrailRun.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		trailRun = null;
		em.close();
	}

	@Test
	@DisplayName("testing trailrun mappings")
	void test1() {
		assertNotNull(trailRun);
		assertEquals("Matthews Winters Lollipop", trailRun.getTrailName());
		assertEquals("Golden, CO", trailRun.getLocation());
		assertEquals("4/6/2020", trailRun.getDate());
		assertEquals("1:15:08", trailRun.getTotalTime());
		assertEquals(6.63, trailRun.getDistance());
		assertEquals("11:10", trailRun.getAveragePace());
		assertEquals("6:56", trailRun.getBestPace());
		assertEquals(1188, trailRun.getElevationGain());
		assertEquals(177, trailRun.getMaxHeartRate());
		assertEquals(155, trailRun.getAvgHeartRate());
		assertEquals(true, trailRun.getDescription().contains("Slight rolling"));
		assertEquals(TrailType.MODERATE, trailRun.getTrailType());
		assertEquals(true, trailRun.getActive());
	}
	
}
