package objectpool;

public class CustomerPool extends ObjectPool {


    @Override
    protected Customer create(int id, String fname, String lname) {
        return new Customer(id, fname, lname);
    }
}
