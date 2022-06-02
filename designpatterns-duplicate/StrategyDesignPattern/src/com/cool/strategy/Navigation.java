package com.cool.strategy;

public class Navigation {
    private Route route;
    public Navigation(){
        route=this.getBestRoute();
    }

    private Route getBestRoute() {
        Route route1=new Route1();
        Route route2=new Route2();
        //Get Traffic
        if(route1.getTraffic() == Traffic.LOW_TRAFFIC && route2.getTraffic() == Traffic.HIGH_TRAFFIC){
            System.out.println("Selecting Low traffic route - Route 1");
            return route1; //Selecting low traffic route;
        }
        System.out.println("Selecting Route 2");
        return route2; //Any other case, return shortest route
    }

    public void navigate(){
        route.getDirections();
    }
}
