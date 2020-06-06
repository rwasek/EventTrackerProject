package com.skilldistillery.trailrun.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("trailruns")
	public TrailRun createNew(
			@RequestBody TrailRun trailRun,
			HttpServletResponse response,
			HttpServletRequest request
	
		) {
		try {
			trailRun = trailSvc.createNewRun(trailRun);
			response.setStatus(201); // 201 successfully created new run
			StringBuffer url = request.getRequestURL(); // gets the resource created with the same url path and TrailRun id
			response.setHeader("Location", url.toString()); // sets the location of the TrailRun that was created and returned
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			trailRun = null;
		}
		return trailRun;
	}
	
	@PutMapping("trailruns/{tId}")
	public TrailRun updateRun(
			@RequestBody TrailRun trailRun,
			@PathVariable Integer tId,
			HttpServletResponse response
			
	) {
		try {
			trailRun = trailSvc.updateRun(trailRun, tId);
			if (trailRun == null) {
				response.setStatus(404); // 404 not found, wrong id
			}
			return trailRun;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400); // bad request due to poor data
			trailRun = null;
		}
		return trailRun;
	}

}
