package com.example.rest_basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.rest_basic.model.Student;

public interface StudentRepository extends JpaRepository<Student, String>{
    // CrudRepository -> provides methods for crud applications
    // PagingAndSortingRepository -> provide methods for paginations & sorting
    // JpaRepository -> provide methods for crud operations & paginations, sorting
}
