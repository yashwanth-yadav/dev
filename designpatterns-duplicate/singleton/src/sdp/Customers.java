package sdp;

import java.util.LinkedList;

public class Customers implements Runnable{

    @Override
    public void run() {
        Tickets customer= Tickets.getInstance();
        System.out.println("customer Instance ID: " + System.identityHashCode(customer));
       System.out.println(customer.getNoOfTickets());
       customer.book(6);

        System.out.println("book tickets");
    }
}
