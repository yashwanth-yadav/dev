package com.cool.proxy;

import javax.swing.*;

public class Browser {
    public void sendRequest(){
        String site = JOptionPane.showInputDialog("Enter the site URL");
        String response=this.getInternetProvider().getResource(site);
        System.out.println(response);
    }

    private ISP getInternetProvider(){
        return new NetworkSettings().getInternet();
    }
}
