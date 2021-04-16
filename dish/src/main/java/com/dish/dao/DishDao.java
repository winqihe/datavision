package com.dish.dao;

import com.dish.entity.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface DishDao extends JpaRepository<Dish, Integer> {

    @Query(value = "select `name`, `rating` from dish d",nativeQuery = true)
    List clouddata();
    @Query(value = "select `name`,`category` from dish d",nativeQuery = true)
    List categorydata();
}
