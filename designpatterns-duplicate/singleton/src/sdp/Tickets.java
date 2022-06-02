package sdp;
import java.util.*;

public class Tickets {
    private static Tickets tickets =null;

    int noOfTickets=50;

    static boolean oneThread = true;
    public static synchronized Tickets getInstance(){
        if (tickets == null){
            if(oneThread){
                oneThread = false;
                try {
                    Thread.currentThread();
                    Thread.sleep(1000);
                }
                catch (InterruptedException e) {
                    System.out.println(e);
                }

            }
            synchronized(Tickets.class){
                if(tickets == null) {
                    tickets = new Tickets();

                }
                }

        }
        return tickets;
    }
    public int getNoOfTickets(){
        return tickets.noOfTickets;
    }
    public void book(int howManyTickets){

        tickets.noOfTickets = tickets.noOfTickets-howManyTickets;
        System.out.println("tickets booked no of tickets left are : "+ tickets.noOfTickets);

    }
}


