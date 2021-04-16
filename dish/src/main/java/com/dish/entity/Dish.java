package com.dish.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Dish {
    @Id
    private int id;
    @Column(unique = true)
    private String name;
    @Column(unique = true)
    private int price;
    @Column(unique = false)
    private String category;
    @Column(unique = false)
    private int rating;
}
