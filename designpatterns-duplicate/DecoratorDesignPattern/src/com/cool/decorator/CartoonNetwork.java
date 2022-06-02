package com.cool.decorator;


public class CartoonNetwork extends ChannelDecorator{

    public CartoonNetwork(SatelliteTV satelliteTV){
        super(satelliteTV);
    }
    @Override
    public void show(int channelNumber) {
        if(channelNumber>300&&channelNumber<400)
            System.out.println("Ahoy kids...");
        else
            this.getSatelliteTV().show(channelNumber);
    }

    @Override
    public int subscriptionPrice() {
        return this.getSatelliteTV().subscriptionPrice()+6;
    }
}
