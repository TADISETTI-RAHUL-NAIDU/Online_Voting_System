package com.klef.jfsd.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.repository.CandidateRepository;

@Service
public class CandidateServiceImpl {
	
	@Autowired
	public CandidateRepository candidateRepository;
	
	

}
