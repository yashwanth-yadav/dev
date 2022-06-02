package adp;

public class Tank implements Attacker{
    @Override
    public void fireWeapon() {
        System.out.println("Tank Does " + 150 + " Damage");
    }

    @Override
    public void driveForward() {
        System.out.println("Tank moving forward");
    }

    @Override
    public void assignDriver(String driverName) {
        System.out.println("Tank driven by " + driverName );
    }
}
