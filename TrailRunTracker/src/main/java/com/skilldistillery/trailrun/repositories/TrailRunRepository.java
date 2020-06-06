package com.skilldistillery.trailrun.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.trailrun.entities.TrailRun;

@Repository
public interface TrailRunRepository extends JpaRepository<TrailRun, Integer> {

}
