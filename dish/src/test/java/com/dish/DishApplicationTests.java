package com.dish;

import com.dish.service.DishService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DishApplicationTests {

    @Autowired
    DishService dishService;
    @Test
    void contextLoads() {
    }
    @Test
    void run(){
    }
}
