package com.quickhire.backend.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.quickhire.backend.entity.Category;
import com.quickhire.backend.repository.CategoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository repository;

    public ResponseEntity<Category> addCategory(Category category) {
        category.setStatus("Active");
        return new ResponseEntity<>(repository.save(category), HttpStatus.CREATED);
    }

    public ResponseEntity<List<Category>> getAllCategory() {
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Category> updateCategory(String id, Category newCategory) {
        if(!repository.existsById(id)) {
            throw new RuntimeException("Category Not Found : " + id);
        }

        newCategory.setId(id);
        Category savedCategory = repository.save(newCategory);
        return new ResponseEntity<>(savedCategory, HttpStatus.OK);
    }

    public void deleteCategory(String id) {
        if(!repository.existsById(id)) {
            throw new RuntimeException("Category Not Found : " + id);
        }
        repository.deleteById(id);
    }
    
}
