package bld;

public class VehicleBuilder implements VehicleBuilderPlan {
    String engine;
    int wheel;
    int airbags;
    int rsaYears;

    public VehicleBuilder(String engine, int wheel) {
        this.engine = engine;
        this.wheel = wheel;
    }
    public VehicleBuilder setAirbags(int airbags){
        this.airbags=airbags;
        return this;
    }

    @Override
    public VehicleBuilder setRSAYears(int rsa) {
        this.rsaYears=rsa;
        return this;

    }

    public Vehicle build(){
        return new Vehicle(this);
    }
    
}
