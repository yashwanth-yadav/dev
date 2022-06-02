package srp;

import java.util.Scanner;

public class PayStudentFee {
    public void payfee(){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter fee amount");
        int feepaid=sc.nextInt();
        int balance=100000-feepaid;
        System.out.println("balance fee amount  "+balance);

    }
}
