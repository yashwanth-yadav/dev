package objectpool;

import java.util.HashSet;
import java.util.Set;

public abstract class ObjectPool {

    public int id;
    public String fname;
    public String lname;

    private final Set<Customer> available = new HashSet<>();
    private final Set<Customer> inUse = new HashSet<>();

    protected Customer create(int id, String fname, String lname) {
        return new Customer(id, fname, lname);
    }

    public Customer checkOut(int id,String fname, String lname) {
        if (available.isEmpty()) {
            available.add(create(id,fname,lname));
        }

        var instance = available.iterator().next();
        available.remove(instance);
        inUse.add(instance);
        return instance;
    }

    public synchronized void checkIn(Customer instance) {
        if(available.size()<5){
            available.add(instance);
            inUse.remove(instance);
        }


    }

    @Override
    public synchronized String toString() {
        return String.format("Pool inUse=%d",  inUse.size());
    }
}

