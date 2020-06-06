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
import com.skilldistillery.trailrun.entities.TrailType;
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
	
	
	@PutMapping("trailruns/disable/{tId}")
	public void disableRun( // postman will show true/false, may refactor as a void for future
			@PathVariable Integer tId,
			HttpServletResponse response	
	) {
		try {
			if(trailSvc.disableRun(tId)) {
				response.setStatus(204); // ID was valid / 204 no content
			}
			else {
				response.setStatus(404); // invalid ID, run not found
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(409); // conflict, trying to delete a run with tied child relationships
		}
	}
	
	
	@GetMapping("trailruns/search/trailtype/{type}")
	public List<TrailRun> findRunsByTrailType(
			@PathVariable TrailType type,
			HttpServletResponse response
	){
		List<TrailRun> runs = null;
		try {
			runs = trailSvc.findByTrailType(type);
			if (type == null) {
				response.setStatus(404);
			}
			return runs;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			runs = null;
		}
		return runs;
	}
	
	@GetMapping("trailruns/search/distance/{min}/{max}")
	public List<TrailRun> findRunsByDistanceRange(
			@PathVariable Double min,
			@PathVariable Double max,
			HttpServletResponse response
	){
		List<TrailRun> runs = null;
		try {
			runs = trailSvc.findByMixMaxDistance(min, max);
			if (min == null || max == null) {
				response.setStatus(404);
			}
			return runs;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			runs = null;
		}
		return runs;
	}
	
	@GetMapping("trailruns/search/distance/{min}")
	public List<TrailRun> findRunsByMinDistance(
			@PathVariable Double min,
			HttpServletResponse response
			){
		List<TrailRun> runs = null;
		try {
			runs = trailSvc.findByMinDistance(min);
			if(min == null) {
				response.setStatus(404);
			}
			return runs;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			runs = null;
		}
		return runs;
	}
	
	@GetMapping("trailruns/search/location/{keyword}")
	public List<TrailRun> findRunsByLocationKeyword(
			@PathVariable String keyword,
			HttpServletResponse response
	){
		List<TrailRun> runs = null;
		try {
			runs = trailSvc.findByLocationKeyword(keyword);
			if (keyword == null) {
				response.setStatus(404);
			}
			return runs;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			runs = null;
		}
		return runs;
	}
	
	
	

}
