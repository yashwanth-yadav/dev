package afdp;

public class RocketSpaceShipFactory implements AbstractSpaceShipFactory {

    @Override
    public SpaceShip createSpaceShip() {
        return new RocketSpaceShip();
    }
}
