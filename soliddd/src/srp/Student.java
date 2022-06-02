package srp;

class Student {
    private String name;
    private int marks;
    private int id;
    public Student(String nam, int id, int mark) {
        name=nam;
        this.id=id;
        marks=mark;
    }
   /* public void addDetails(String nam,int id,int mark) {
        name=nam;
        this.id=id;
        marks=mark;
    }*/

    //void studentNonSrp
    /*public void printDetails()
    {   System.out.println("name+    +marks+    id");
        System.out.println(name+"      "+marks+"     "+id);
    }*/
    public int  getMarks(){

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

}
