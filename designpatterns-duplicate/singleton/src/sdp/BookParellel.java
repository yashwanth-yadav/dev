package sdp;

public class BookParellel {    //When multiple players pick simultaniously
    public static void main(String[] args) {

        Runnable customer1 = new Customers();
        Runnable customer2 = new Customers();
        new Thread(customer1).start();
        new Thread(customer2).start();
    }
}
