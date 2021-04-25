package com.dish.controller;

import com.dish.dao.HealthDao;
import com.dish.entity.Health;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HealthController {
    @Autowired
    private HealthDao healthDao;

    @RequestMapping("/healthdata")
    public List<Health> healthdata(){
        return healthDao.healthdata();
    }
}
