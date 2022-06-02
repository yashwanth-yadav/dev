package com.cool.decorator;

public class Espn extends ChannelDecorator{

    public Espn(SatelliteTV satelliteTV){
        super(satelliteTV);
    }
    @Override
    public void show(int channelNumber) {
        if(channelNumber>100&&channelNumber<200)
            System.out.println("Enjoy your sports channel...");
        else
            this.getSatelliteTV().show(channelNumber);
    }

    @Override
    public int subscriptionPrice() {
        return this.getSatelliteTV().subscriptionPrice()+7;
    }
}
