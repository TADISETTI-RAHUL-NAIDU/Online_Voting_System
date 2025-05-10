package com.klef.jfsd.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.klef.jfsd.springboot.model.Election;

import jakarta.transaction.Transactional;

@Repository
public interface ElectionRepository extends JpaRepository<Election, Long> {


	@Query("delete from  Election e  where e.codenum=?1")
	@Modifying
	@Transactional
	public int  deleteByCodenum(Long codenum );

	

}
