package com.example.rest_basic.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.rest_basic.model.Student;

@Service
public class StudentService {
    private List<Student> students;

    public StudentService(List<Student> students) {
        this.students = students;
    }

    public Student createStudent(Student student) {
        student.setId(UUID.randomUUID().toString());
        students.add(student);
        System.out.println("student added");
        System.out.println(student);
        return student;
    }

    public List<Student> getStudentsList() {
        System.out.println("students extracted");
        return students;
    }
}
