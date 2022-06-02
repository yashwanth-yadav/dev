package com.cool.strategy;

public interface Route {
    public void getDirections();
    public int getTotalDistance();
    public Enum<Traffic> getTraffic();
}
