package afdp;

import java.util.Scanner;

public class SpaceShipTesting {
    public static void main(String[] args){


        SpaceShip ufo1=SpaceShipFactory.getSpaceShip(new UFOSpaceShipFactory());
        ufo1.spectate();
        ufo1.attack();

        SpaceShip rocketShip1=SpaceShipFactory.getSpaceShip(new RocketSpaceShipFactory());
        rocketShip1.spectate();
        rocketShip1.attack();

        SpaceShip megaShip1=SpaceShipFactory.getSpaceShip(new MegaSpaceShipFactory());
        megaShip1.attack();


    }
}
