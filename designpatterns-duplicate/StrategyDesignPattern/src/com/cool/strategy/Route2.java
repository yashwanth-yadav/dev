package com.cool.strategy;
import java.util.Random;

public class Route2 implements Route{

    @Override
    public void getDirections() {
        System.out.println("Turn Right after 150 meters");
    }

    @Override
    public int getTotalDistance() {
        return 15;
    }

    @Override
    public Enum<Traffic> getTraffic() {
        Random random = new Random();
        if(random.nextBoolean()==true){
            System.out.println("High Traffic on Route2");
            return Traffic.HIGH_TRAFFIC;
        }
        System.out.println("Low Traffic on Route2");
        return Traffic.LOW_TRAFFIC;
    }


}
