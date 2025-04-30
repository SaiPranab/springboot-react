package com.example.rest_basic.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.rest_basic.exception.StudentNotFoundException;
import com.example.rest_basic.model.Student;
import com.example.rest_basic.repository.StudentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository repository;

    public Student createStudent(Student student) {
        student.setId(UUID.randomUUID().toString());
        System.out.println("Student added to the db");
        return repository.save(student); // insert & update
    }

    public List<Student> getStudentsList() {
        System.out.println("Students extracting from database");
        return repository.findAll(); // extract all rows
    }

    public Student getStudentById(String studentId) {
       return repository.findById(studentId).orElseThrow(() -> new StudentNotFoundException("student not found with id " + studentId)); 
    }

    public Student updateStudent(String id, Student newStudent) {
        if(!repository.existsById(id)){
            throw new StudentNotFoundException("Student not found with id " + id);
        }

        newStudent.setId(id);
        return repository.save(newStudent); // update
    }

    public Student deleteStudentById(String id) {
        Student student = getStudentById(id);
        repository.delete(student);
        return student;
    }
}
