package srp;

public class getdetails {
    public getdetails(){

    }
    public getdetails(Student stud){
        System.out.println("student details are :");
        System.out.println("name+    +marks+    id");
        System.out.println(stud.getname()+"      "+stud.getMarks()+"     "+stud.getid());
    }
    public getdetails(Teacher teach){
        System.out.println("teacher details are :");
        System.out.println("name+    +age+    id");
        System.out.println(teach.getname()+"      "+teach.getage()+"     "+teach.getid());
    }
}
