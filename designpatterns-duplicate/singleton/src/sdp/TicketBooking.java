package sdp;


import java.util.LinkedList;

public class TicketBooking {
    public static void main(String[] args) {
        Tickets customer1 = Tickets.getInstance();
        System.out.println("customer1 Instance ID: " + System.identityHashCode(customer1));
        System.out.println("Tickets left "+customer1.getNoOfTickets());
        customer1.book(9);


        Tickets customer2= Tickets.getInstance();
        System.out.println("customer2 Instance ID: " + System.identityHashCode(customer2));
        System.out.println(customer2.getNoOfTickets());
        customer2.book(7);


    }
}
