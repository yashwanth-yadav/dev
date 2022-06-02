package objectpool;

public class Test {
    public static void main(String[] args) {
        CustomerPool pool = new CustomerPool();
        var customer1 = pool.checkOut(1,"raj","nath");
        var customer2 = pool.checkOut(2,"raj","nath");
        var customer3 = pool.checkOut(3,"raj","nath");
        pool.checkIn(customer1);
        pool.checkIn(customer2);
        var customer4 = pool.checkOut(4,"raj","nath");
        var customer5 = pool.checkOut(5,"raj","nath");

        System.out.println(customer1.toString());
        // only available objects can be called, on calling inuse object it returns most recent used object in available list
        System.out.println(customer4.toString());
        System.out.println(pool.toString());
    }
}
