package com.cool.strategy;

import java.util.Random;
public class Route1 implements Route{
    @Override
    public void getDirections() {
        System.out.println("Turn Left after 200 meters");
    }

    @Override
    public int getTotalDistance() {
        return 20;
    }

    @Override
    public Enum<Traffic> getTraffic() {
        Random random  = new Random();
        if(random.nextBoolean() == true){
            System.out.println("High Traffic on Route 1");
            return Traffic.HIGH_TRAFFIC;
        }
        System.out.println("Low Traffic on Route 1");
        return Traffic.LOW_TRAFFIC;
    }
}

