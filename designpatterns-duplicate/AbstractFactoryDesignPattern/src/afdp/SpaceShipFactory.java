package afdp;

public class SpaceShipFactory{

    public static SpaceShip getSpaceShip(AbstractSpaceShipFactory abstractSpaceShipFactory) {
        return abstractSpaceShipFactory.createSpaceShip();
    }


}
