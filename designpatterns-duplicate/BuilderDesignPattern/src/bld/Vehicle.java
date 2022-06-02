package bld;

public class Vehicle implements VehiclePlan{
    private String engine;
    private int wheel;
    private int airbags;
    private int rsaValidYears;
    public  Vehicle(VehicleBuilder vehicle){
        this.engine=vehicle.engine;
        this.wheel=vehicle.wheel;
        this.airbags=vehicle.airbags;
        this.rsaValidYears= vehicle.rsaYears;
    }
    public String getEngine(){
        return this.engine;
    }
    public int getWheel(){
        return this.wheel;
    }

    @Override
    public int RSAValidity() {
        return this.rsaValidYears;
    }

    @Override
    public void displayDetails() {
        System.out.println("Engine Capacity is "+engine);
        System.out.println("No of Wheels are : "+wheel);
        System.out.println("No of airbags : "+airbags);
        System.out.println("Road Side Assistance is valid for : "+rsaValidYears);
        System.out.println("-----------------------------------------------------------------------------------");
    }

    public int getAirbags(){
        return this.airbags;
    }
}
