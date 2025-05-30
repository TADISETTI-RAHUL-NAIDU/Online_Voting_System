package com.klef.jfsd.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.model.Election;
import com.klef.jfsd.springboot.repository.ElectionRepository;

@Service
public class ElectionServiceImpl implements ElectionService {

	@Autowired
	public ElectionRepository electionRepository;
	@Override
	public String AddElection(Election election) {
		electionRepository.save(election);
		return "Election Added Successfully";
		
		
	}
	
	@Override
	public String deleteElectionByCodenum(Long codenum) {
	    electionRepository.deleteByCodenum(codenum);
	    return "Election Deleted Successfully";
	}
	@Override
	public Election getElectionById(Long id) {
	    return electionRepository.findById(id).orElse(null);
	}

	@Override
	public void updateElection(Election updated) {
	    electionRepository.save(updated);  // saves if exists
	}



}
