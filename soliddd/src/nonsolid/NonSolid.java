package nonsolid;

import java.util.Scanner;

class Student {
    private String name;
    private int marks;
    private int id;
    public Student(String nam, int id, int mark) {
        name=nam;
        this.id=id;
        marks=mark;
    }

    public int  getpercentage(){

        return marks;
    }
    //  pubic void calculatePercentage()
    // {
    //     System.out.println(marks);
    // }
    public String getname()
    {
        return name;


    }
    public int getid(){
        return id;
    }
    public void payfee(){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter fee amount");
        int feepaid=sc.nextInt();
        int balance=100000-feepaid;
        System.out.println("balance fee amount  "+balance);

    }


}

class Teacher {
    private String name;
    private int empid;
    private int age;
    private int salary;
    public Teacher(String name, int empid, int age){
        this.name=name;
        this.empid=empid;
        this.age=age;
    }
    public Teacher(String name, int empid, int age, int salary){
        this.name=name;
        this.empid=empid;
        this.age=age;
        this.salary=salary;
    }

    public String  getname()
    {
        //System.out.println(name);
        return name;
    }
    public int getid(){
        //System.out.println(empid);
        return empid;
    }
    public int getage(){
        // System.out.println(age);
        return age;
    }
    public int getSalary() {
    	return salary;
    }
}

class Getdetails {
    public Getdetails(){

    }
    public Getdetails(Student stud){
        System.out.println("student details are :");
        System.out.println("name+    +marks+    id");
        System.out.println(stud.getname()+"      "+stud.getpercentage()+"     "+stud.getid());
    }
    public Getdetails(Teacher teach){
        System.out.println("teacher details are :");
        System.out.println("name+    +age+    id");
        System.out.println(teach.getname()+"      "+teach.getage()+"     "+teach.getid());
    }
}



interface Calci {
    public int add(int a, int b);

    public int sub(int a, int b);

    public int mul(int a, int b);
}

class Calculator implements Calci {

    @Override
    public int add(int a, int b) {
        return a+b;
    }

    @Override
    public int sub(int a, int b) {
        return a-b;
    }

    @Override
    public int mul(int a, int b) {
        return a*b;
    }
}


class Fan {
    boolean isOn;
    boolean isWorking;

    public Fan(boolean condition) {
        isWorking = condition;
        isOn = condition;
    }
}

interface Lighting{
    public boolean checkLight();
}
class Light implements Lighting {
    boolean isOn;
    boolean isWorking;

    public Light(boolean condition) {
        isOn = condition;
        isWorking = condition;
    }


    @Override
    public boolean checkLight() {
        return isOn;
    }
}


class ClgAccessories
{

  public final Fan fan;
  public final Light light;
    public ClgAccessories()
    {
        fan = new Fan(false);
        light = new Light(true);
    }
    public void checkroom(){
        if(fan.isWorking==true)
            System.out.println("fan is working in the room");
        else
            System.out.println("fan is not working in the room");
        if(light.isWorking)
            System.out.println("light is working in the room");
        else
            System.out.println("light is not working in the room");
    }
}


public class NonSolid {
    public static void main(String[] args){

        Student student1=new Student("raj",2451,94);
        student1.payfee();
        Teacher teacher1=new Teacher("ramesh",18733,40);
        Getdetails getdetails1=new Getdetails(student1);
        Getdetails getdetails2=new Getdetails(teacher1);

        Teacher assistantprofessor=new Teacher("kamal",7896,26,36000);
        System.out.println(assistantprofessor.getSalary());

        Calculator a=new Calculator();
        System.out.println(a.add(2,5));
        Calculator cal=new Calculator();
        System.out.println(cal.add(3,5));
        Calculator s=new Calculator();
        System.out.println(s.sub(12,5));

        ClgAccessories clgAccess=new ClgAccessories();
        clgAccess.checkroom();
    }
}
