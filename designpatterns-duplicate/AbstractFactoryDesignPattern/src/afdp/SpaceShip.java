package afdp;

public abstract class SpaceShip {
    private String name;
    private int speed;
    private int amtDamage;
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name=name;
    }
    public int getDamage(){
        return amtDamage;
    }
    public void setDamage(int amtDamage){
        this.amtDamage=amtDamage;
    }
    public void attack(){
        System.out.println(name+ " is attacking with damage of "+amtDamage);
    }
    public void spectate(){
        System.out.println(getName()+" is spectating surroundings");
    }
}
