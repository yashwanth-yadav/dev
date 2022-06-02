package bld;

public interface VehicleBuilderPlan {

    public VehicleBuilder setAirbags(int airbags);
    public VehicleBuilder setRSAYears(int rsa);
    public Vehicle build();
}
