package srp;

public class Fan implements CheckAccesoryStatus {
    boolean isOn;
    boolean isWorking;

    public Fan(boolean condition) {
        isWorking = condition;
        isOn = condition;
    }

    @Override
    public boolean works() {
        if(isWorking)
            System.out.println("fan is working");
        else System.out.println("fan is not working");
        return isWorking;
    }
}
