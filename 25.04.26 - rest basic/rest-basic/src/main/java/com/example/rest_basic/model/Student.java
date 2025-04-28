package com.example.rest_basic.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity // instruction for data jpa to create a table
public class Student {
    @Id // it specifies that this field is my primary key for this table
    private String id;
    private int roll;
    private String name;
    private String email;   
}
