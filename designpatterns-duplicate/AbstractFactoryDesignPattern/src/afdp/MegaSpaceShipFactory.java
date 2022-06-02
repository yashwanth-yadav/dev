package afdp;

public class MegaSpaceShipFactory implements AbstractSpaceShipFactory {
    @Override
    public SpaceShip createSpaceShip() {
        return new MegaSpaceShip();
    }
}
