package com.skilldistillery.trailrun.services;

import java.util.List;

import com.skilldistillery.trailrun.entities.TrailRun;

public interface TrailRunService {
	List<TrailRun> getAll();
	TrailRun findRunById(Integer tId);
	TrailRun createNewRun(TrailRun trailRun);
	TrailRun updateRun(TrailRun trailRun, Integer tId);
	boolean disableRun(Integer tId);
	
}
