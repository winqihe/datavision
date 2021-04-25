package com.dish.controller;

import com.dish.dao.DishDao;
import com.dish.entity.Dish;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DishController {
    @Autowired DishDao dishDao;

    @RequestMapping("/getall")
    public List<Dish> getall(){
        return dishDao.findAll();
    }
    @RequestMapping("/clouddata")
    public List clouddata(){
        return dishDao.clouddata();
    }
    @RequestMapping("/categorydata")
    public List categorydata(){
        return dishDao.categorydata();
    }
    @RequestMapping("/mesdata")
    public List mesdata(){
        return dishDao.mesdata();
    }
    @RequestMapping("/waittime")
    public List waittime(){
        return dishDao.waittime();
    }
}
