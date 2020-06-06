package com.skilldistillery.trailrun.services;

import java.util.List;
import java.util.Optional;

import org.apache.log4j.lf5.viewer.configure.MRUFileManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.trailrun.entities.TrailRun;
import com.skilldistillery.trailrun.repositories.TrailRunRepository;

@Service
public class TrailRunServiceImpl implements TrailRunService {

	@Autowired
	TrailRunRepository trailRepo;

	@Override
	public List<TrailRun> getAll() {
		return trailRepo.findAll();
	}

	@Override
	public TrailRun findRunById(Integer tId) {
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
	public void disableRunById(Integer tId) {
		// TODO Auto-generated method stub
		
	}


}
