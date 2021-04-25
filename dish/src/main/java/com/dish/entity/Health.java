package com.dish.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Health {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name ="id")
    private int id;
    private String name;
    private int value;
}
