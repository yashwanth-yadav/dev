package com.cool.decorator;

public class SkyTv implements SatelliteTV{
    @Override
    public void show(int channelNumber) {
        if (channelNumber<100)
            System.out.println("news channels...");
        else System.out.println("you are not subscribed...");
    }

    @Override
    public int subscriptionPrice() {
        return 100;
    }
}
