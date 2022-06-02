package com.cool.decorator;


public class Discovery extends ChannelDecorator{

    public Discovery(SatelliteTV satelliteTV){
        super(satelliteTV);
    }
    @Override
    public void show(int channelNumber) {
        if(channelNumber>300&&channelNumber<400)
            System.out.println("Welcome to the jungle...");
        else
            this.getSatelliteTV().show(channelNumber);
    }

    @Override
    public int subscriptionPrice() {
        return this.getSatelliteTV().subscriptionPrice()+3;
    }
}

