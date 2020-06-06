package com.skilldistillery.trailrun.services;

import java.util.List;


import com.skilldistillery.trailrun.entities.TrailRun;
import com.skilldistillery.trailrun.entities.TrailType;

public interface TrailRunService {
	List<TrailRun> getAll();
	TrailRun findRunById(Integer tId);
	TrailRun createNewRun(TrailRun trailRun);
	TrailRun updateRun(TrailRun trailRun, Integer tId);
	boolean disableRun(Integer tId);
	List<TrailRun> findByTrailType(TrailType trailType);
	List<TrailRun> findByMixMaxDistance(Double min, Double max);

	
}
