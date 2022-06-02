package com.cool.decorator;

public class Test {
    public static void main(String[] args) {

        //here espn and cartoon are 2 decorators wrapping skyTv
        SatelliteTV satelliteTV=new Espn(new CartoonNetwork(new SkyTv()));
        satelliteTV.show(105);
        System.out.println(satelliteTV.subscriptionPrice());
    }
}
