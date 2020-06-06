package com.skilldistillery.trailrun.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.trailrun.entities.TrailRun;
import com.skilldistillery.trailrun.entities.TrailType;

@Repository
public interface TrailRunRepository extends JpaRepository<TrailRun, Integer> {
	List<TrailRun> findByTrailType(TrailType trailType);
	
}
