package com.cool.prototype.client;

import com.cool.prototype.Student;
import com.cool.prototype.StudentDAO;

import java.util.List;

public class Test {
	public static void main(String[] args) throws CloneNotSupportedException  {

    StudentDAO studentDAO = new StudentDAO();


    List<Student> allStudents = studentDAO.getAllStudents();

    List<Student> updatedStudentList = studentDAO.clone();

    Student student = new Student();
		student.setId(30);
		student.setName("ram");

    //Doing manipulation on cloned copy
		updatedStudentList.add(student);

		System.out.println("Original Student List:");
		allStudents.forEach(System.out::println);

		System.out.println("Updated Student List:");
		updatedStudentList.forEach(System.out::println);
}
}
