package srp;

public class Ac implements CheckAccesoryStatus {
    boolean isOn;
    boolean isWorking;

    public Ac(boolean condition) {
        isOn = condition;
        isWorking = condition;
    }


    @Override
    public boolean works() {

        System.out.println("Ac is working");

        return isWorking;
    }
}
