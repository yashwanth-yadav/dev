package afdp;

public class UFOSpaceShipFactory implements AbstractSpaceShipFactory{

    @Override
    public SpaceShip createSpaceShip() {
        return new UFOSpaceShip();
    }
}


