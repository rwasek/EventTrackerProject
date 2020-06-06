package com.skilldistillery.trailrun.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.trailrun.entities.TrailRun;
import com.skilldistillery.trailrun.entities.TrailType;
import com.skilldistillery.trailrun.repositories.TrailRunRepository;

@Service
public class TrailRunServiceImpl implements TrailRunService {

	@Autowired
	TrailRunRepository trailRepo;

	@Override
	public List<TrailRun> getAll() { // returns only runs that have not been disabled
		List<TrailRun> allRuns = trailRepo.findAll();
		List<TrailRun> activeRuns = new ArrayList<>();
		for (TrailRun trailRun : allRuns) {
			if (trailRun.getActive() == true) {
				activeRuns.add(trailRun);
			}
			else activeRuns.remove(trailRun);
		}
		return activeRuns;
	}

	@Override
	public TrailRun findRunById(Integer tId) { // returns any run ID, even a disabled run
		Optional<TrailRun> optRun = trailRepo.findById(tId);
		TrailRun trailRun = null;
		
		if (optRun.isPresent()) {
			trailRun = optRun.get();
		}
		return trailRun;
	}

	@Override
	public TrailRun createNewRun(TrailRun trailRun) {
		return trailRepo.save(trailRun);
	}

	@Override
	public TrailRun updateRun(TrailRun trailRun, Integer tId) {
		TrailRun managedRun = null;
		Optional<TrailRun> existingRun = trailRepo.findById(tId);
		if (existingRun.isPresent()) {
			managedRun = existingRun.get();
			managedRun.setTrailName(trailRun.getTrailName());
			managedRun.setLocation(trailRun.getLocation());
			managedRun.setDate(trailRun.getDate());
			managedRun.setTotalTime(trailRun.getTotalTime());
			managedRun.setDistance(trailRun.getDistance());
			managedRun.setAveragePace(trailRun.getAveragePace());
			managedRun.setBestPace(trailRun.getBestPace());
			managedRun.setElevationGain(trailRun.getElevationGain());
			managedRun.setMaxHeartRate(trailRun.getMaxHeartRate());
			managedRun.setAvgHeartRate(trailRun.getAvgHeartRate());
			managedRun.setDescription(trailRun.getDescription());
			managedRun.setTrailType(trailRun.getTrailType());
			managedRun.setActive(trailRun.getActive());
			trailRepo.saveAndFlush(managedRun);
		}
		return managedRun;
	}

	@Override
	public boolean disableRun(Integer tId) {
		boolean disabled = false;
		Optional<TrailRun> trailRunToDisable = trailRepo.findById(tId);
		TrailRun managedRun = null;
		if(trailRunToDisable.isPresent()) {
			managedRun = trailRunToDisable.get();
			managedRun.setActive(false);
			trailRepo.saveAndFlush(managedRun);
			disabled = true;
		}
		return disabled;		
	}

	
	@Override
	public List<TrailRun> findByTrailType(TrailType trailType) {
		List<TrailRun> runsByType = trailRepo.findByTrailType(trailType);
		List<TrailRun> activeRunsByType = new ArrayList<>();
		for (TrailRun trailRun : runsByType) {
			if (trailRun.getActive() == true) {
				activeRunsByType.add(trailRun);
			}
			else activeRunsByType.remove(trailRun);
		}
		return activeRunsByType;		
	}

	@Override
	public List<TrailRun> findByMixMaxDistance(Double min, Double max) {
		List<TrailRun> runsByRange = trailRepo.queryByDistanceInRange(min, max);
		List<TrailRun> activeRunsByRange = new ArrayList<>();
		for (TrailRun trailRun : runsByRange) {
			if (trailRun.getActive() == true) {
				activeRunsByRange.add(trailRun);
			}
			else activeRunsByRange.remove(trailRun);
		}
		
		return activeRunsByRange;
	}

	


}
