package srp;

abstract class Teacher {
    private String name;
    private int empid;
    private int age;
    public Teacher(String name, int empid, int age){
        this.name=name;
        this.empid=empid;
        this.age=age;
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
    abstract int getSalary();
}
