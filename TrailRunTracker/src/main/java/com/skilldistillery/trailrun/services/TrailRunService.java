package com.skilldistillery.trailrun.services;

import java.util.List;

import com.skilldistillery.trailrun.entities.TrailRun;

public interface TrailRunService {
	List<TrailRun> getAll();
	TrailRun findRunById(Integer tId);
	TrailRun createNewRun();
	TrailRun updateRunById(Integer tId);
	void disableRunById(Integer tId);
	
}
