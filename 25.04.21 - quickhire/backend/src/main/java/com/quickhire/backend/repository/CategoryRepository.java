package com.quickhire.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickhire.backend.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, String>{
    
}
