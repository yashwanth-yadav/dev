package adp;

public class RobotAdaptor implements Attacker{
    Robot theRobot;
    public RobotAdaptor(Robot newRobot){
        theRobot=newRobot;
    }
    @Override
    public void fireWeapon() {
        theRobot.smashWithHands();
    }

    @Override
    public void driveForward() {
        theRobot.walkForward();
    }

    @Override
    public void assignDriver(String driverName) {
        theRobot.reactToHuman(driverName);
    }
}
