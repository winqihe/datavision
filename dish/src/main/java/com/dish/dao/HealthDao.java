package com.dish.dao;

import com.dish.entity.Health;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HealthDao extends JpaRepository<Health,Integer> {

    @Query(value = " select * from health h",nativeQuery = true)
    List<Health> healthdata();
}
