package com.skilldistillery.trailrun.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "trail_run")
public class TrailRun {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="trail_name")
	private String trailName;
	
	private String location;
	
	private String date;
	
	@Column(name="total_time")
	private String totalTime;
	
	private double distance;
	
	@Column(name="average_pace")
	private String averagePace;
	
	@Column(name="best_pace")
	private String bestPace;
	
	@Column(name="elevation_gain")
	private Integer elevationGain;
	
	@Column(name="max_heart_rate")
	private Integer maxHeartRate;
	
	@Column(name="average_heart_rate")
	private Integer avgHeartRate;
	
	private String description;
	
	@Column(name="trail_type")
	@Enumerated(EnumType.STRING)
	private TrailType trailType;
	
	private boolean active;

	// CONSTRUCTORS:
	
	public TrailRun() {
		super();
	}

	public TrailRun(int id, String trailName, String location, String date, String totalTime, Double distance,
			String averagePace, String bestPace, Integer elevationGain, Integer maxHeartRate, Integer avgHeartRate,
			String description, TrailType trailType, Boolean active) {
		super();
		this.id = id;
		this.trailName = trailName;
		this.location = location;
		this.date = date;
		this.totalTime = totalTime;
		this.distance = distance;
		this.averagePace = averagePace;
		this.bestPace = bestPace;
		this.elevationGain = elevationGain;
		this.maxHeartRate = maxHeartRate;
		this.avgHeartRate = avgHeartRate;
		this.description = description;
		this.trailType = trailType;
		this.active = active;
	}

	// METHODS:
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTrailName() {
		return trailName;
	}

	public void setTrailName(String trailName) {
		this.trailName = trailName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTotalTime() {
		return totalTime;
	}

	public void setTotalTime(String totalTime) {
		this.totalTime = totalTime;
	}

	public double getDistance() {
		return distance;
	}

	public void setDistance(double distance) {
		this.distance = distance;
	}

	public String getAveragePace() {
		return averagePace;
	}

	public void setAveragePace(String averagePace) {
		this.averagePace = averagePace;
	}

	public String getBestPace() {
		return bestPace;
	}

	public void setBestPace(String bestPace) {
		this.bestPace = bestPace;
	}

	public Integer getElevationGain() {
		return elevationGain;
	}

	public void setElevationGain(Integer elevationGain) {
		this.elevationGain = elevationGain;
	}

	public Integer getMaxHeartRate() {
		return maxHeartRate;
	}

	public void setMaxHeartRate(Integer maxHeartRate) {
		this.maxHeartRate = maxHeartRate;
	}

	public Integer getAvgHeartRate() {
		return avgHeartRate;
	}

	public void setAvgHeartRate(Integer avgHeartRate) {
		this.avgHeartRate = avgHeartRate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public TrailType getTrailType() {
		return trailType;
	}

	public void setTrailType(TrailType trailType) {
		this.trailType = trailType;
	}

	public boolean getActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TrailRun other = (TrailRun) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "TrailRun [id=" + id + ", trailName=" + trailName + ", location=" + location + ", date=" + date
				+ ", totalTime=" + totalTime + ", distance=" + distance + ", averagePace=" + averagePace + ", bestPace="
				+ bestPace + ", elevationGain=" + elevationGain + ", maxHeartRate=" + maxHeartRate + ", avgHeartRate="
				+ avgHeartRate + ", description=" + description + ", trailType=" + trailType + ", active=" + active
				+ "]";
	}
}
