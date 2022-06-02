package srp;

class studentNonSrp{
    String name;
    int marks;

    public void addDetails(String nam,int mark) {
        name=nam;

        marks=mark;
    }

    //void studentNonSrp
    public void printDetails()
    {
        System.out.println(name+"--"+marks);
    }
    public void percentage(){
        System.out.println(marks);
    }
  //  pubic void calculatePercentage()
   // {
   //     System.out.println(marks);
   // }
    public void addStudent()
    {
        System.out.println("student details added");

    }


}
