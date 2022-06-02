package bld;

public class VehicleTest {
    public static void main (String args[]){
        Vehicle car1=new VehicleBuilder("1200 cc",4).setAirbags(2).setRSAYears(4).build();
        car1.displayDetails();
       // System.out.println(car1.getAirbags());

        Vehicle bike1=new VehicleBuilder("350 cc",2).build();
        bike1.displayDetails();
       // System.out.println(bike1.getAirbags());



    }
}
