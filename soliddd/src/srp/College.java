package srp;

public class College {
    public static void main(String[] args){
        //S
        Student student1=new Student("raj",2451,94);
       // Teacher teacher1=new Teacher("ramesh",18733,40);
        getdetails getdetails1=new getdetails(student1);
       // getdetails getdetails2=new getdetails(teacher1);
        PayStudentFee fee=new PayStudentFee();
       // fee.payfee();

        // O,L
        Teacher assis=new AssistantProfessor("kamal",7896,26,36000);

        assis.getSalary();

        //I
        Addi a=new Addi();
        System.out.println(a.add(2,5));
        Calculator cal=new Calculator();
        System.out.println(cal.add(3,5));
        Subi s=new Subi();
        System.out.println(s.sub(12,5));
        //D
        Fan fan=new Fan(true);
        Light light=new Light(false);
        ClgAccessories clgAccess=new ClgAccessories(light);
        ClgAccessories clgAccess2=new ClgAccessories(fan);


    }
}
