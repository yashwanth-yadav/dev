package adp;

public class Robot {
    public void smashWithHands() {
        System.out.println("Robot smashes with " + 200 + " Damage");
    }

    public void walkForward() {
        System.out.println("Robot walks  " + 200 + " spaces");
    }
    public void reactToHuman(String driverName) {
       System.out.println("Robot Tramps on " + driverName);
    }

}
