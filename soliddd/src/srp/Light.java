package srp;

public class Light implements CheckAccesoryStatus {
    boolean isOn;
    boolean isWorking;

    public Light(boolean condition) {
        isOn = condition;
        isWorking = condition;
    }


    @Override
    public boolean works() {
        if(isWorking)
        System.out.println("light is working");
        else System.out.println("light is not working");
        return isWorking;
    }
}
