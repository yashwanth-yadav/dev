package adp;

public class TestAttacker {
    public static void main(String args[]){
        Tank tank1=new Tank();
        Robot ultron=new Robot();

        Attacker robotAdapter=new RobotAdaptor(ultron);

        System.out.println("tank stuff ---------------------------------------");
        tank1.driveForward();
        tank1.fireWeapon();
        tank1.assignDriver("bruce");

        System.out.println("Robot stuff --------------------------------------");
        ultron.reactToHuman("wanda");
        ultron.walkForward();
        ultron.smashWithHands();

        System.out.println("Robot with adapter stuff -------------------------");
        robotAdapter.assignDriver("stark");
        robotAdapter.driveForward();
        robotAdapter.fireWeapon();

    }
}
