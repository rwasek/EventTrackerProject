package com.skilldistillery.trailrun.services;

import java.util.List;
import java.util.Optional;

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
	public TrailRun createNewRun() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TrailRun updateRunById(Integer tId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void disableRunById(Integer tId) {
		// TODO Auto-generated method stub
		
	}
}
