package com.skilldistillery.trailrun.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.trailrun.entities.TrailRun;
import com.skilldistillery.trailrun.services.TrailRunService;

@RestController
@RequestMapping("api")
public class TrailRunController {
	
	@Autowired
	TrailRunService trailSvc;
	
	@GetMapping("trailruns")
	public List<TrailRun> index(){
		return trailSvc.getAll();
	}
	
	@GetMapping("trailruns/{tId}")
	public TrailRun retrieve(
			@PathVariable Integer tId,
			HttpServletResponse response
	) {
		TrailRun trailRun = trailSvc.findRunById(tId);
		if (trailRun == null) {
			response.setStatus(404); // if null 404 - no post with that id
		}
		return trailRun;
	}

}
